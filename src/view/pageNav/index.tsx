import NavLeft from './cpns/navItem'
import NavTitle from './cpns/navTitle'
import { pageNavConfig } from '@/static'

export default function Template() {
  const mid = pageNavConfig.length >> 1
  const navLeftConfig = pageNavConfig.slice(0, mid)
  const navRightConfig = pageNavConfig.slice(mid)
  return (
    <div className='border-b border-b-zinc-300 h-[48px] w-full flex justify-between' style={{ position: 'fixed' }}>
      <NavLeft navLeftConfig={navLeftConfig} />
      <NavTitle />
      {/* <NavRight/> */}
      <NavLeft navLeftConfig={navRightConfig} />
    </div>
  )
}
