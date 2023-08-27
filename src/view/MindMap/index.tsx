import { useRef } from 'react'
import DrawDashedCanvas from '@/component/DrawDashedCanvas'
import RootNode from '@/component/RootNode'
import DrawLine from '@/component/drawLine'
import { type NodeType, XMIND_WRAPPER_CLASS_NAME, allNodeRefs } from '@/static'

interface IProps {
  defaultNode: NodeType
}

export default function MainMap({ defaultNode }: IProps) {
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div id={XMIND_WRAPPER_CLASS_NAME} ref={canvasContainerRef}>
      {/* 绘制所有的节点 */}
      <RootNode defaultNode={defaultNode} allNodeRefs={allNodeRefs} />
      {/* canvas 绘制拖动的虚线 */}
      <DrawDashedCanvas canvasContainerRef={canvasContainerRef} nodeTree={defaultNode} allNodeRefs={allNodeRefs} />
      {/* canvas 绘制并且将节点连起来 */}
      <DrawLine nodeTree={defaultNode} allNodeRefs={allNodeRefs} />
    </div>
  )
}
