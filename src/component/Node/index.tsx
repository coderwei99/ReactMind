import { useEffect, useRef } from 'react'
import { NodePosition, type NodeType } from '@/static'
import type { allNodeRefsType } from '@/utils/types'

interface IProps {
  node: NodeType
  allNodeRefs: allNodeRefsType
  onLeft: boolean
  parentId: string | number
  showBorderId: string
  setShowBorderId: (id: string) => void
}

export default function Node({ node, allNodeRefs, onLeft, parentId, showBorderId, setShowBorderId }: IProps) {
  // 将所有渲染的node节点都保存起来 然后放到一个set里面,set主要是为了去重,避免用户多次拖拽同一个节点
  const nodeRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    // 渲染的时候就将节点保存起来
    allNodeRefs.add(nodeRef)
    return () => {
      // 删除的时候也要从set里面删除
      allNodeRefs.delete(nodeRef)
    }
  }, [nodeRef])
  const handleNodeClick = (e: React.MouseEvent<HTMLDivElement>, nodeId: string) => {
    ; (e.target as HTMLDivElement).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
    setShowBorderId(nodeId)
  }

  return (
    <div
      id={node.id}
      className='w-auto h-auto max-w-[240px] break-words p-[20px]'
      ref={nodeRef}
      data-nodetype={onLeft ? NodePosition.LEFT : NodePosition.RIGHT}
      data-parentid={parentId}
      onClick={e => handleNodeClick(e, node.id)}
    >
      <div
        className={'bg-slate-600 border-solid border-black border-[2px] p-[15px] rounded-[10px]'}
        style={{ boxShadow: `${showBorderId === node.id ? '0 0 0 3px #ffffff, 0 0 0 6px red' : ''}` }}
        draggable={node.id !== 'node_root'}
        id={node.id}
        data-nodetype={onLeft ? NodePosition.LEFT : NodePosition.RIGHT}
        data-parentid={parentId}
      >
        <p
          id={node.id}
          className='min-w-[40px] select-none'
          data-parentid={parentId}
          data-nodetype={onLeft ? NodePosition.LEFT : NodePosition.RIGHT}
        >
          {node.text}
        </p>
      </div>
    </div>
  )
}
