import Node from '../Node'
import type { allNodeRefsType } from '@/utils/types'
import type { NodeType } from '@/static'

interface IProps {
  node: NodeType
  nodePosition: 'left' | 'right'
  allNodeRefs: allNodeRefsType
  onLeft: boolean
}

export default function SubNode({ node, nodePosition, allNodeRefs, onLeft }: IProps) {
  return (
    <div className={`flex ${nodePosition === 'left' ? 'flex-row-reverse' : ''}`} >
      <Node node={node} allNodeRefs={allNodeRefs} onLeft={onLeft} ></Node>
      {
        node.children.length > 0 && node.children.map((node) => {
          return <SubNode node={node} nodePosition={nodePosition} allNodeRefs={allNodeRefs} onLeft={onLeft}></SubNode>
        })
      }
    </div >
  )
}
