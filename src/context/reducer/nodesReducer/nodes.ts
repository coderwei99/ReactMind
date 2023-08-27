import { moveNodeFn } from './help'
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
