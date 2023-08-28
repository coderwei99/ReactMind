export interface NodeType {
  id: string
  text: string
  children: NodeType[]
}

export type defaultNodeType = NodeType[]

export const defaultNode: defaultNodeType = [
  {
    id: 'node_root',
    text: '主题',
    children: [
      {
        id: '1-1',
        text: 'children1=> 1-1',
        children: [],
      },
      {
        id: '1-2',
        text: 'children2children2children2children2children2children2children2children2  => 1-2',
        children: [],
      },
      {
        id: '1-3',
        text: 'children3 => 1-3',
        children: [],
      },
      {
        id: '1-4',
        text: 'children42children2children2children2children2children2children2children2 => 1-4',
        children: [],
      },
      {
        id: '1-5',
        text: 'children1-5',
        children: [],
      },
      {
        id: '1-6',
        text: 'children1-6',
        children: [],
      },
      {
        id: '1-7',
        text: 'children1-7',
        children: [],
      },
      {
        id: '1-8',
        text: 'children1-8',
        children: [],
      },
      {
        id: '1-9',
        text: 'children1-9',
        children: [],
      },
      {
        id: '1-10',
        text: 'children1-10',
        children: [],
      },
      // {
      //   id: '1-11',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-12',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-13',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-14',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-15',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-16',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-17',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-18',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-19',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-20',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-21',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-22',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-23',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-24',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-25',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-26',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-27',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-28',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-29',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-30',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-31',
      //   text: 'children4',
      //   children: [],
      // },
      // {
      //   id: '1-32',
      //   text: 'children4',
      //   children: [],
      // },
    ],
  },
]
