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
  editNodeId: string
  setEditNodeId: (id: string) => void
  reRenderLine: () => void
}

export default function SubNode({
  node,
  nodePosition,
  allNodeRefs,
  onLeft,
  parentId,
  showBorderId,
  setShowBorderId,
  editNodeId,
  setEditNodeId,
  reRenderLine,
}: IProps) {
  return (
    <div className={`flex justify-start items-center ${nodePosition === 'left' ? 'flex-row-reverse' : ''}`} >
      <Node
        showBorderId={showBorderId}
        setShowBorderId={setShowBorderId}
        node={node}
        allNodeRefs={allNodeRefs}
        onLeft={onLeft}
        parentId={parentId}
        editNodeId={editNodeId}
        setEditNodeId={setEditNodeId}
        reRenderLine={reRenderLine}
      ></Node>
      <div>
        {
          node.children.length > 0 && node.children.map((childrenNode) => {
            return (
              <SubNode
              key={childrenNode.id}
                showBorderId={showBorderId}
                setShowBorderId={setShowBorderId}
                node={childrenNode}
                nodePosition={nodePosition}
                allNodeRefs={allNodeRefs}
                onLeft={onLeft}
                parentId={node.id}
                editNodeId={editNodeId}
                setEditNodeId={setEditNodeId}
                reRenderLine={reRenderLine}
              ></SubNode>
            )
          })
        }
      </div>
    </div >
  )
}
