import { useEffect, useRef } from 'react'
import { NodePosition, type NodeType } from '@/static'
import type { allNodeRefsType } from '@/utils/types'

interface IProps {
  node: NodeType
  allNodeRefs: allNodeRefsType
  onLeft: boolean
}

export default function Node({ node, allNodeRefs, onLeft }: IProps) {
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
  return (
    <div
      id={node.id}
      className='w-auto h-auto max-w-[240px] break-words  p-[20px]'
      ref={nodeRef}
      data-nodetype={onLeft ? NodePosition.LEFT : NodePosition.RIGHT}
      draggable
    >
      <div className='bg-slate-600 border-solid border-black border-[2px] p-[15px] rounded-[10px]' >
        <p>
          {node.text}
        </p>
      </div>
    </div>
  )
}
