import SubBox from '../subBox'
import type { IPageNavConfigType } from '@/static'

interface IProps {
  navLeftConfig: IPageNavConfigType[]
}

export default function NavLeft({ navLeftConfig }: IProps) {
  return (
  <div className='flex justify-between flex-1'>
    {
      navLeftConfig.map(item => (
        <SubBox name={item.name} keyName = {item.keyName} key={item.name} >{item.icon}</SubBox>
      ))
    }
  </div>)
}
