import Node from '../Node'
import type { allNodeRefsType } from '@/utils/types'
import type { NodeType } from '@/static'

interface IProps {
  node: NodeType
  nodePosition: 'left' | 'right'
  allNodeRefs: allNodeRefsType
  onLeft: boolean
  parentId: string | number
}

export default function SubNode({ node, nodePosition, allNodeRefs, onLeft, parentId }: IProps) {
  return (
    <div className={`flex ${nodePosition === 'left' ? 'flex-row-reverse' : ''}`} >
      <Node node={node} allNodeRefs={allNodeRefs} onLeft={onLeft} parentId={parentId} ></Node>
      {
        node.children.length > 0 && node.children.map((childrenNode) => {
          return <SubNode node={childrenNode} nodePosition={nodePosition} allNodeRefs={allNodeRefs} onLeft={onLeft} parentId={node.id}></SubNode>
        })
      }
    </div >
  )
}
