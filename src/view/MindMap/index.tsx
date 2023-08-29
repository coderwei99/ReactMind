import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DrawDashedCanvas from '@/component/DrawDashedCanvas'
import RootNode from '@/component/RootNode'
import DrawLine from '@/component/drawLine'
import { type NodeType, XMIND_WRAPPER_CLASS_NAME, allNodeRefs } from '@/static'

interface IProps {
  defaultNode: NodeType
}

export default function MainMap({ defaultNode }: IProps) {
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  // 拖拽节点 会造成界面的重新渲染 我需要生成一个新的标识符 告诉DrawLine组件重新绘制曲线 DrawLine组件会监听这个标识符的变化
  const renderId = uuidv4()
  return (
    <div id={XMIND_WRAPPER_CLASS_NAME} ref={canvasContainerRef} className='px-[300px] py-[300px]'>
      {/* 绘制所有的节点 */}
      <RootNode defaultNode={defaultNode} allNodeRefs={allNodeRefs} />
      {/* canvas 绘制拖动的虚线和处理拖拽逻辑 */}
      <DrawDashedCanvas canvasContainerRef={canvasContainerRef} nodeTree={defaultNode} allNodeRefs={allNodeRefs} />
      {/* canvas 绘制并且将节点连起来 */}
      <DrawLine nodeTree={defaultNode} allNodeRefs={allNodeRefs} renderId={renderId} canvasContainerRef ={canvasContainerRef}/>
    </div>
  )
}
