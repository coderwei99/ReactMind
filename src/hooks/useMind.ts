import { useContext } from 'react'
import { DefaultNodeContext } from '@/context'
import type { mindNodeActionType } from '@/utils/types'

export function useMind(): mindNodeActionType {
  const { nodes } = useContext(DefaultNodeContext)
  const { nodesDispatch } = nodes
  return {
    moveNode(id: string, targetId: string) {
      nodesDispatch({ type: 'MOVE_NODE', payload: { id, targetId } })
    },
  }
}
