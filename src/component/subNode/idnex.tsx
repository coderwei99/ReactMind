import Node from '../Node'
import type { allNodeRefsType } from '@/utils/types'
import type { NodeType } from '@/static'

interface IProps {
  node: NodeType
  nodePosition: 'left' | 'right'
  allNodeRefs: allNodeRefsType
  onLeft: boolean
  parentId: string | number
  showBorderId: string
  setShowBorderId: (id: string) => void
}

export default function SubNode({ node, nodePosition, allNodeRefs, onLeft, parentId, showBorderId, setShowBorderId }: IProps) {
  return (
    <div className={`flex ${nodePosition === 'left' ? 'flex-row-reverse' : ''}`} >
      <Node showBorderId={showBorderId} setShowBorderId={setShowBorderId} node={node} allNodeRefs={allNodeRefs} onLeft={onLeft} parentId={parentId} ></Node>
      {
        node.children.length > 0 && node.children.map((childrenNode) => {
          return <SubNode showBorderId={showBorderId} setShowBorderId={setShowBorderId} node={childrenNode} nodePosition={nodePosition} allNodeRefs={allNodeRefs} onLeft={onLeft} parentId={node.id}></SubNode>
        })
      }
    </div >
  )
}
