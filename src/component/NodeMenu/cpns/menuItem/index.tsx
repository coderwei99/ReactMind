import type { ReactNode } from 'react'
import type { INodeMenuConfigType } from '@/static'

interface IProps {
  name: string
  children: ReactNode
  keyName: INodeMenuConfigType['keyName']
  onClick: (keyName: INodeMenuConfigType['keyName']) => void
}

export default function MenuItem({ name, children, onClick, keyName }: IProps) {
  return (
    <div className='text-[10px] flex flex-col items-center p-[3px]' onClick={() => onClick(keyName)} >
      {children}
      {name}
    </div>
  )
}
