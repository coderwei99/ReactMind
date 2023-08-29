import NavLeft from './cpns/navItem'
import NavTitle from './cpns/navTitle'
import { pageNavConfig } from '@/static'

interface IProps {

}

export default function Template(props: IProps) {
  const mid = pageNavConfig.length >> 1
  const navLeftConfig = pageNavConfig.slice(0, mid)
  const navRightConfig = pageNavConfig.slice(mid)
  return (
    <div className='bg-blue-600 h-[48px] w-full flex justify-between'>
      <NavLeft navLeftConfig={navLeftConfig} />
      <NavTitle />
      {/* <NavRight/> */}
      <NavLeft navLeftConfig = {navRightConfig}/>
    </div>
  )
}
