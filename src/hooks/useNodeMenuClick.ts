import { useMessage } from './useMessage'
import type { INodesActionType } from '@/context/reducer/nodesReducer/nodes'

/* eslint-disable no-console */
export function useNodeMenuClick(nodesDispatch: React.Dispatch<INodesActionType>) {
  const { message } = useMessage()
  return {
    addSubNode: (id: string) => {
      nodesDispatch({ type: 'ADD_SUB_NODE', payload: { id } })
      console.log('addSubNode', id)
    },
    addBrotherNode: () => {
      message.warning('暂未实现!')
      console.log('addBrotherNode')
    },
    deleteNode: (id: string) => {
      nodesDispatch({ type: 'DELETE_NODE', payload: { id } })
      console.log('deleteNode')
    },
    editNode: (id: string, handleFunction: (nodeId: string) => void) => {
      handleFunction(id)
      console.log('editNode', id)
    },
    remark: () => {
      message.warning('暂未实现!')
      console.log('remark')
    },

  }
}
