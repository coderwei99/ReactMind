export interface NodeType {
  id: string
  text: string
  children: NodeType[]
}

export type defaultNodeType = NodeType[]

export const defaultNode: defaultNodeType = [
  {
    id: '1',
    text: '主题',
    children: [
      {
        id: '1-1',
        text: 'children1',
        children: [],
      },
      {
        id: '1-2',
        text: 'children2children2children2children2children2children2children2children2',
        children: [],
      },
      {
        id: '1-3',
        text: 'children3',
        children: [],
      },
      {
        id: '1-4',
        text: 'children42children2children2children2children2children2children2children2',
        children: [],
      },
      {
        id: '1-5',
        text: 'children4',
        children: [],
      },
      {
        id: '1-6',
        text: 'children4',
        children: [],
      },
    ],
  },
]
