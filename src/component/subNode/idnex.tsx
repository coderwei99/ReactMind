import Node from '../Node'
import type { NodeType } from '@/static'

interface IProps {
  node: NodeType
  nodePosition: 'left' | 'right'
}

export default function SubNode({ node, nodePosition }: IProps) {
  return (
    <div className={`flex ${nodePosition === 'left' ? 'flex-row-reverse' : ''}`} >
      <Node node={node}></Node>
      {
        node.children.length > 0 && node.children.map((node) => {
          return <SubNode node={node} nodePosition={nodePosition}></SubNode>
        })
      }
    </div >
  )
}
