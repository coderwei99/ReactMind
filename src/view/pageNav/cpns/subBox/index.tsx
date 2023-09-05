import { App } from 'antd'
import type { IPageNavConfigType } from '@/static'

interface IProps {
  name: string
  keyName: IPageNavConfigType['keyName']
  children: React.ReactNode
}

export default function SubBox({ name, keyName, children }: IProps) {
  // q: contextHolder有什么作用?
  // a:

  const { message } = App.useApp()
  const clickHandlers = {
    export: () => {
      message.warning('暂未开发!')
    },
    import: () => {
      message.warning('暂未开发!')
    },
    create: () => {
      message.warning('暂未开发!')
    },
    open: () => {
      message.warning('暂未开发!')
    },
    theme: () => {
      message.warning('暂未开发!')
    },
    zoomIn: () => {
      message.warning('暂未开发!')
    },
    zoomOut: () => {
      message.warning('暂未开发!')
    },
    reset: () => {
      message.warning('暂未开发!')
    },
    up: () => {
      message.warning('暂未开发!')
    },
    down: () => {
      message.warning('暂未开发!')
    },
    left: () => {
      message.warning('暂未开发!')
    },
    right: () => {
      message.warning('暂未开发!')
    },
  }
  const handleNavClick = (keyName: keyof typeof clickHandlers) => {
    clickHandlers[keyName]()
  }
  return (
    <div
      className="w-[40px] mx-[10px] text-[12px] text-black justify-center items-center flex  flex-col cursor-pointer"
      onClick={() => handleNavClick(keyName)}
    >
      {children}
      {name}
    </div>
  )
}
