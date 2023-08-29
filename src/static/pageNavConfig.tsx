import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Command, DownloadCloud, FilePlus, Plus, RefreshCcw, UploadCloud, ZoomIn, ZoomOut } from 'react-feather'

export interface IPageNavConfigType {
  name: string
  keyName: 'export' | 'import' | 'create' | 'open' | 'theme' | 'zoomIn' | 'zoomOut' | 'reset' | 'up' | 'down' | 'left' | 'right' // keyName 用来在用户点击的时候找到对应的处理事件,哪里用的策略模式,key写成中文有点抽象
  icon: React.ReactNode
}
export const pageNavConfig: IPageNavConfigType[] = [
  {
    name: '导出',
    keyName: 'export',
    icon: <DownloadCloud />,
  },
  {
    name: '导入',
    keyName: 'import',
    icon: <UploadCloud />,
  },
  {
    name: '新建',
    keyName: 'create',
    icon: <Plus />,
  },
  {
    name: '打开',
    keyName: 'open',
    icon: <FilePlus />,
  },
  {
    name: '主题',
    keyName: 'theme',
    icon: <Command />,
  },
  {
    name: '放大',
    keyName: 'zoomIn',
    icon: <ZoomIn />,
  },
  {
    name: '缩小',
    keyName: 'zoomOut',
    icon: <ZoomOut />,
  },
  {
    name: '还原',
    keyName: 'reset',
    icon: <RefreshCcw />,
  },
  {
    name: '上',
    keyName: 'up',
    icon: <ArrowUp />,
  },
  {
    name: '下',
    keyName: 'down',
    icon: <ArrowDown />,
  },
  {
    name: '左',
    keyName: 'left',
    icon: <ArrowLeft />,
  },
  {
    name: '右',
    keyName: 'right',
    icon: <ArrowRight />,
  },
]
