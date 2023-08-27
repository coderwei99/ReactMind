import type { NodeType } from '@/static'

export const nodesReducerActionTypeEnum = {
  MOVENODE: 'Move_Node',
}

export interface INodesActionType {
  type: 'MOVE_NODE'
  payload: {
    id: string
    targetId: string
  }
}
export function nodesReducerAction(state: NodeType, action: INodesActionType): NodeType {
  let _: never
  switch (action.type) {
    case 'MOVE_NODE': {
      const { id, targetId } = action.payload
      moveNodeFn(state, id, targetId)
      return { ...state }
    }
    default:
      // 走到这里说明有action.type没有被匹配到 我希望所有的type都会被穷举处理 别给action加了新的type却忘记处理这个type的逻辑 这里用never就可以抛出异常 没有处理type这里就提示错误
      _ = action.type
      return _
  }
}

// 移动节点函数
function moveNodeFn(nodeState: NodeType, id: string, targetId: string) {
  // todo: happy path 遵循最小实现原则 先实现最简单的功能 手动排除一些影响我们实现最小功能的边界 后续再对这些边界情况进行兼容处理
  if (targetId === '1-3')
    return
  // 先将这个元素删除
  const drapDom = deleteNodeById(nodeState, id)
  // 然后再插入到目标元素的前面
  insertNodeById(nodeState, drapDom!, targetId)
  return nodeState
}

function deleteNodeById(node: NodeType, targetId: string) {
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

function insertNodeById(nodes: NodeType, drapDom: NodeType, targetId: string) {
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
