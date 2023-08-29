import React, { useEffect, useRef } from 'react'
import { type NodeType } from '@/static'
import type { allNodeRefsType } from '@/utils/types'
import { getCanvasEvent } from '@/utils/canvasEvent'
import { useMind } from '@/hooks/useMind'

interface IProps {
  allNodeRefs: allNodeRefsType
  nodeTree: NodeType
  canvasContainerRef: React.RefObject<HTMLDivElement>
}

export default function DrawDashedCanvas({ nodeTree, allNodeRefs, canvasContainerRef }: IProps) {
  // 1. 首先需要确定拖动的节点和这个节点的父节点
  // 2. 然后根据拖动的位置计算新节点的位置
  // 3. 最后更新节点 触发自动更新
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // 我们利用的事件冒泡机制  并不是给每个具备拖拽属性的节点绑定事件 而是为他们的父节点绑定事件(容器)
  // 抽象出来的操作节点的所有方法
  const mindNodeAction = useMind()
  useEffect(() => {
    // 动态调整canvas的大小 根据父容器 父容器多大 canvas就多大 必须保持一致 因为连接节点的线段时计算节点离父容器的距离的
    canvasRef.current!.width = canvasContainerRef.current!.offsetWidth
    canvasRef.current!.height = canvasContainerRef.current!.offsetHeight
    // 这个canvas在加载出来的时候注册事件 监听通过e.target拿到具体拖拽的元素
    const canvasEvent = getCanvasEvent(canvasRef.current!, nodeTree, allNodeRefs, mindNodeAction)
    canvasEvent.forEach((e) => {
      canvasContainerRef.current?.addEventListener(e.eventName, e.listenEvent)
    })

    return () => {
      // canvas 卸载 需要清除事件
      canvasEvent.forEach((e) => {
        canvasContainerRef.current?.removeEventListener(e.eventName, e.listenEvent)
      })
    }
  })

  return <canvas ref={canvasRef} className='absolute inset-0 z-[-1]'></canvas>
}
