import RootNode from '@/component/RootNode'
import DrawLine from '@/component/drawLine'
import { type NodeType, allNodeRefs } from '@/static'

interface IProps {
  defaultNode: NodeType
}

export default function MainMap({ defaultNode }: IProps) {
  return (
    <>
      {/* 绘制所有的节点 */}
      <RootNode defaultNode={defaultNode} allNodeRefs={allNodeRefs} />
      {/* canvas 绘制并且将节点连起来 */}
      <DrawLine nodeTree={defaultNode} allNodeRefs={allNodeRefs} />
    </>
  )
}
