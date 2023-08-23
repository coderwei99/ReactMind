import MainMap from '../MainMap'
import { defaultNode } from '@/static'

export default function index() {
  // console.log('defaultNode', defaultNode)
  return (
    <div className='relative flex justify-center items-center h-full'>
      {/* 思维导图组件 */}
      <MainMap defaultNode={defaultNode[0]}></MainMap>
      {/* canvas 连线 */}
      <canvas className='absolute inset-0 z-[-1]' id="canvas" width="1000" height="1000"></canvas>
    </div>
  )
}
