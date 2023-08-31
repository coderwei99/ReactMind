import type { INodesActionType } from '@/context/reducer/nodesReducer/nodes'

/* eslint-disable no-console */
export function useNodeMenuClick(nodesDispatch: React.Dispatch<INodesActionType>) {
  return {
    addSubNode: (id: string) => {
      console.log('addSubNode', id)
    },
    addBrotherNode: () => {
      console.log('addBrotherNode')
    },
    deleteNode: () => {
      console.log('deleteNode')
    },
    editNode: (id: string, handleFunction: (nodeId: string) => void) => {
      handleFunction(id)
      console.log('editNode', id)
    },
    remark: () => {
      console.log('remark')
    },

  }
}
