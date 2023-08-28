import { createContext, useReducer } from 'react'

import type { INodesActionType } from './reducer/nodesReducer/nodes'
import { nodesReducerAction } from './reducer/nodesReducer/nodes'
import { type IThemeColorAction, type IThemeColorType, themeColor, themeReducer } from './reducer/themeReducer/theme'
import type { NodeType } from '@/static/defaultNode'
import { defaultNode } from '@/static/defaultNode'

interface IDefaultNodeContextType {
  nodes: {
    nodesState: NodeType
    nodesDispatch: React.Dispatch<INodesActionType>
  }
  theme: {
    themeState: IThemeColorType
    themeDispatch: React.Dispatch<IThemeColorAction>
  }
}

export const DefaultNodeContext = createContext<IDefaultNodeContextType>(null!)

// 给app组件提供的上下文对象
export function AppProviderContext({ children }: { children: React.ReactNode }) {
  const [nodesState, nodesDispatch] = useReducer(nodesReducerAction, defaultNode[0])
  const [themeState, themeDispatch] = useReducer(themeReducer, themeColor[0])
  const AppProviderValue: IDefaultNodeContextType = {
    // 所有节点 用于渲染 它具有树形结构
    nodes: {
      nodesState,
      nodesDispatch,
    },
    theme: {
      themeState,
      themeDispatch,
    },
  }
  // type AppProviderValueNode = typeof AppProviderValue
  return <DefaultNodeContext.Provider value={AppProviderValue}>{children}</DefaultNodeContext.Provider>
}
