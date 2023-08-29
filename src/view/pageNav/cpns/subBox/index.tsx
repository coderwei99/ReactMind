import { message } from 'antd'
import type { IPageNavConfigType } from '@/static'

interface IProps {
  name: string
  keyName: IPageNavConfigType['keyName']
  children: React.ReactNode
}

export default function SubBox({ name, keyName, children }: IProps) {
  // q: contextHolder有什么作用?
  // a:

  const [messageApi, contextHolder] = message.useMessage()
  const clickHandlers = {
    export: () => {
      messageApi.warning('暂未开发!')
    },
    import: () => {
      messageApi.warning('暂未开发!')
    },
    create: () => {
      messageApi.warning('暂未开发!')
    },
    open: () => {
      messageApi.warning('暂未开发!')
    },
    theme: () => {
      messageApi.warning('暂未开发!')
    },
    zoomIn: () => {
      messageApi.warning('暂未开发!')
    },
    zoomOut: () => {
      messageApi.warning('暂未开发!')
    },
    reset: () => {
      messageApi.warning('暂未开发!')
    },
    up: () => {
      messageApi.warning('暂未开发!')
    },
    down: () => {
      messageApi.warning('暂未开发!')
    },
    left: () => {
      messageApi.warning('暂未开发!')
    },
    right: () => {
      messageApi.warning('暂未开发!')
    },
  }
  const handleNavClick = (keyName: keyof typeof clickHandlers) => {
    clickHandlers[keyName]()
  }
  return (
    <div
      className="w-[40px] mx-[10px] text-[12px] text-white justify-center items-center flex  flex-col cursor-pointer"
      onClick={() => handleNavClick(keyName)}
    >
      {contextHolder}
      {children}
      {name}
    </div>
  )
}
