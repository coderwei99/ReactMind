import { useEffect, useRef, useState } from 'react'
import { Plus } from 'react-feather'
import SubNode from '@/component/subNode/idnex'
import Node from '@/component/Node'
import type { NodeType } from '@/static'
import type { allNodeRefsType } from '@/utils/types'

interface IProps {
  defaultNode: NodeType
  allNodeRefs: allNodeRefsType
  reRenderLine: () => void
  nodeContainerRef: React.RefObject<HTMLDivElement>

}

export default function RootNode({ defaultNode, allNodeRefs, reRenderLine, nodeContainerRef }: IProps) {
  // 记录给那个node设置选中效果(边框)
  const [showBorderId, setShowBorderId] = useState('')
  // 记录给那个node设置修改状态
  const [editNodeId, setEditNodeId] = useState('')

  // 平均分成两份 一份在左侧 一份在右侧
  const harf = defaultNode.children.length >> 1

  const nodeleftBoxRef = useRef<HTMLDivElement>(null)
  const nodeCenterBoxRef = useRef<HTMLDivElement>(null)
  const nodeRightBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    nodeContainerRef.current!.style.width = `${nodeleftBoxRef.current!.offsetWidth + nodeRightBoxRef.current!.offsetWidth + nodeCenterBoxRef.current!.offsetWidth + 600}px`
  })

  // 处理icon的点击事件
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>, nodeId: string) => {
    e.stopPropagation()
    // eslint-disable-next-line no-console
    console.log('11', nodeId)
  }
  return (
    <div className={'flex items-center justify-center'}>
      {/* 左侧的节点 */}
      <div ref={nodeleftBoxRef}>
        {defaultNode.children.slice(harf).map((node) => {
          return <SubNode
            showBorderId={showBorderId}
            setShowBorderId={setShowBorderId}
            node={node}
            nodePosition='left'
            key={node.id}
            allNodeRefs={allNodeRefs}
            onLeft={true}
            parentId={defaultNode.id}
            editNodeId={editNodeId}
            setEditNodeId={setEditNodeId}
            reRenderLine={reRenderLine}
          >
            {
              (node: NodeType) => (
                <div
                  className='absolute top-1/2 transform -translate-y-1/2 bg-sky-500 rounded-[16px] left-[-17px]'
                  onClick={e => handleIconClick(e, node.id)}
                >
                  <Plus width='16px' height='16px' color='white' />
                </div>
              )
            }
          </SubNode>
        })}
      </div>
      {/* 主题 也就是最中间那个节点 */}
      <div className='flex items-center' ref={nodeCenterBoxRef}>
        <div>
          <Node
            editNodeId={editNodeId}
            setEditNodeId={setEditNodeId}
            showBorderId={showBorderId}
            setShowBorderId={setShowBorderId}
            node={defaultNode}
            allNodeRefs={allNodeRefs}
            onLeft={false}
            parentId={defaultNode.id}
            reRenderLine={reRenderLine}
          >
            {
              defaultNode.children.length > 1
                ? (node: NodeType) => (
                  <>
                    <div
                      className='absolute top-1/2 transform -translate-y-1/2 bg-sky-500 rounded-[16px] left-[-17px]'
                      onClick={e => handleIconClick(e, node.id)}
                    >
                      <Plus width='16px' height='16px' color='white' />
                    </div>
                    <div
                      className='absolute top-1/2 transform -translate-y-1/2 bg-sky-500 rounded-[16px] right-[-17px]'
                      onClick={e => handleIconClick(e, node.id)}
                    >
                      <Plus width='16px' height='16px' color='white' />
                    </div>
                  </>
                  )
                : (node: NodeType) => (
                  <div
                    className='absolute top-1/2 transform -translate-y-1/2 bg-sky-500 rounded-[16px] left-[-17px]'
                    onClick={e => handleIconClick(e, node.id)}
                  >
                    <Plus width='16px' height='16px' color='white' />
                  </div>
                  )

            }

          </Node>
        </div>
      </div>
      {/* 右侧的节点 */}
      <div ref={nodeRightBoxRef}>
        {defaultNode.children.slice(0, harf).map((node) => {
          return <SubNode
            showBorderId={showBorderId}
            setShowBorderId={setShowBorderId}
            node={node}
            nodePosition='right'
            key={node.id}
            allNodeRefs={allNodeRefs}
            onLeft={false}
            parentId={defaultNode.id}
            editNodeId={editNodeId}
            setEditNodeId={setEditNodeId}
            reRenderLine={reRenderLine}
          >
            {
              (node: NodeType) => (
                <div
                  className='absolute top-1/2 transform -translate-y-1/2 bg-sky-500 rounded-[16px] right-[-17px]'
                  onClick={e => handleIconClick(e, node.id)}
                >
                  <Plus width='16px' height='16px' color='white' />
                </div>
              )
            }
          </SubNode>
        })}
      </div>
    </div>
  )
}
