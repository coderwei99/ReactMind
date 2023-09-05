import { v4 as uuidv4 } from 'uuid'
import { editNodeByIdFn, findNodeByIdFn, hiddenNode, moveNodeFn, removeNode } from './help'
import type { NodeType } from '@/static'

export const nodesReducerActionTypeEnum = {
  MOVENODE: 'Move_Node',
}

export interface INodesActionType {
  type: 'MOVE_NODE' | 'EDIT_NODE' | 'ADD_SUB_NODE' | 'ADD_BROTHER_NODE' | 'DELETE_NODE' | 'HIDDEN_CHILDREN'
  payload: {
    id: string
    targetId?: string
    newText?: string
  }
}
export function nodesReducerAction(state: NodeType, action: INodesActionType): NodeType {
  let _: never
  switch (action.type) {
    case 'MOVE_NODE': {
      const { id, targetId } = action.payload
      moveNodeFn(state, id, targetId!)
      return { ...state }
    }
    case 'EDIT_NODE': {
      const { id, newText } = action.payload
      editNodeByIdFn(state, id, newText!)
      return { ...state }
    }
    case 'ADD_SUB_NODE': {
      const { id } = action.payload
      // 先找到当前的节点 然后给他的children push进去一个新的node即可 currentNode一定有值的 不然点击事件虚空触发?
      const currentNode = findNodeByIdFn(state, id)!
      currentNode.children.push({
        id: `node-${uuidv4().split('-')[0]}`,
        text: '新节点',
        children: [],
        showChildren: true,
      })
      return { ...state }
    }
    case 'ADD_BROTHER_NODE': {
      return { ...state }
    }
    case 'DELETE_NODE': {
      const { id } = action.payload
      removeNode(state, id)
      return { ...state }
    }
    case 'HIDDEN_CHILDREN': {
      const { id } = action.payload
      hiddenNode(state, id)
      return { ...state }
    }
    default:
      // 走到这里说明有action.type没有被匹配到 我希望所有的type都会被穷举处理 别给action加了新的type却忘记处理这个type的逻辑 这里用never就可以抛出异常 没有处理type这里就提示错误
      _ = action.type
      return _
  }
}
