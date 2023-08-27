import { createContext, useReducer } from 'react'

import type { INodesActionType } from './reducer/nodes'
import { nodesReducerAction } from './reducer/nodes'
import type { NodeType } from '@/static/defaultNode'
import { defaultNode } from '@/static/defaultNode'

interface IDefaultNodeContextType {
  nodes: {
    nodesState: NodeType
    nodesDispatch: React.Dispatch<INodesActionType>
  }
}

export const DefaultNodeContext = createContext<IDefaultNodeContextType>(null!)

// 给app组件提供的上下文对象
export function AppProviderContext({ children }: { children: React.ReactNode }) {
  const [nodesState, nodesDispatch] = useReducer(nodesReducerAction, defaultNode[0])
  const AppProviderValue: IDefaultNodeContextType = {
    // 所有节点 用于渲染 它具有树形结构
    nodes: {
      nodesState,
      nodesDispatch,
    },
  }
  // type AppProviderValueNode = typeof AppProviderValue
  return <DefaultNodeContext.Provider value={AppProviderValue}>{children}</DefaultNodeContext.Provider>
}
