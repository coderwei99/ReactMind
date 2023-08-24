import MainMapContainer from '../MainMapContainer'
import { defaultNode } from '@/static'

export default function index() {
  // console.log('defaultNode', defaultNode)
  return (
    <div className='relative flex justify-center items-center h-full'>
      {/* 思维导图组件容器 */}
      <MainMapContainer defaultNode={defaultNode[0]}></MainMapContainer>
    </div>
  )
}
