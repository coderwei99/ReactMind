import { logChildrenId } from '@/devRuntimeHelp'
import type { NodeType } from '@/static'

// 移动节点函数
export function moveNodeFn(nodeState: NodeType, id: string, targetId: string) {
  // 首先判断edge case 用户拖动一个节点 就在这个节点附近松开鼠标 那么我们什么都不做 不然用户会发现鼠标不接了
  if (targetId === id)
    return
  // todo: happy path 遵循最小实现原则 先实现最简单的功能 手动排除一些影响我们实现最小功能的边界 后续再对这些边界情况进行兼容处理
  // 先将这个元素删除
  const drapDom = deleteNodeById(nodeState, id)
  logChildrenId(nodeState)
  // 然后再插入到目标元素的前面
  insertNodeById(nodeState, drapDom!, targetId)
  logChildrenId(nodeState)

  return nodeState
}

export function deleteNodeById(node: NodeType, targetId: string) {
  // 递归遍历树结构
  for (let i = 0; i < node.children.length; i++) {
    if (node.children[i].id === targetId) {
      // 找到目标节点，从父节点的 children 数组中删除它 然后把这个元素返回出去 后续要把他插入到别的位置
      return node.children.splice(i, 1)[0]
    }
    else {
      // 递归处理子节点
      deleteNodeById(node.children[i], targetId)
    }
  }
}

export function insertNodeById(nodes: NodeType, drapDom: NodeType, targetId: string) {
  // 递归遍历树结构
  for (let i = 0; i < nodes.children.length; i++) {
    if (nodes.children[i].id === targetId) {
      // 找到目标节点，从父节点的 children 数组中删除它 然后把这个元素返回出去 后续要把他插入到别的位置
      nodes.children.splice(i, 0, drapDom)
      return true
    }
    else {
      // 递归处理子节点
      if (insertNodeById(nodes.children[i], drapDom, targetId))
        return true // 表示删除成功
    }
  }
  return false // 表示未找到目标节点
}

// 根据id修改节点的text
export function editNodeByIdFn(state: NodeType, id: string, newText: string) {
  // 递归遍历树结构
  for (let i = 0; i < state.children.length; i++) {
    if (state.children[i].id === id) {
      // 找到目标节点，从父节点的 children 数组中删除它 然后把这个元素返回出去 后续要把他插入到别的位置
      state.children[i].text = newText
      return true
    }
    else {
      // 递归处理子节点
      if (editNodeByIdFn(state.children[i], id, newText))
        return true // 表示删除成功
    }
  }
  return false // 表示未找到目标节点
}

// 根据id找到某个节点
export function findNodeByIdFn(state: NodeType, id: string): NodeType {
  // 多叉树的遍历 寻找某个id
  // 递归遍历树结构
  return state.children.find((node) => {
    if (node.id === id) {
      return node
    }
    else {
      // 递归处理子节点
      return findNodeByIdFn(node, id)
    }
  })!
}

// 根据id找到删除这个节点
export function removeNode(state: NodeType, targetId: string) {
  state.children.forEach((node, index) => {
    if (node.id === targetId) {
      // 找到目标节点，从父节点的 children 数组中删除它 然后把这个元素返回出去 后续要把他插入到别的位置
      state.children.splice(index, 1)
      return state
    }
    else {
      // 递归处理子节点
      removeNode(node, targetId)
    }
  })
}
