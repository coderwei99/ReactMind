import type { ReactNode } from 'react'
import { Delete, Edit, Edit2, GitBranch, GitCommit } from 'react-feather'

export interface INodeMenuConfigType {
  name: string
  keyName: 'addSubNode' | 'addBrotherNode' | 'deleteNode' | 'editNode' | 'remark'
  icon: ReactNode
}
export const nodeMenuConfig: INodeMenuConfigType[] = [
  {
    name: '添加子节点',
    keyName: 'addSubNode',
    icon: <GitCommit width={20} height={20} />,
  },
  {
    name: '添加兄弟节点',
    keyName: 'addBrotherNode',
    icon: <GitBranch width={20} height={20} />,
  },
  {
    name: '删除节点',
    keyName: 'deleteNode',
    icon: <Delete width={20} height={20} />,
  },
  {
    name: '修改节点',
    keyName: 'editNode',
    icon: <Edit2 width={20} height={20} />,
  },
  {
    name: '备注',
    keyName: 'remark',
    icon: <Edit width={20} height={20} />,
  },
]
