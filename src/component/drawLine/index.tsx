import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { allNodeRefsType } from '@/utils/types'
import { drawLineCanvas } from '@/utils/canvasHelp'
import type { NodeType } from '@/static'
import { getElementStyle } from '@/utils/getElementStyle'

interface IProps {
  allNodeRefs: allNodeRefsType
  nodeTree: NodeType
}

export default function DrawLine({ nodeTree, allNodeRefs }: IProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [uuid, setUuid] = useState(uuidv4())
  // 监听屏幕大小变化 重新绘制连线
  const handleResize = () => {
    setUuid(uuidv4())
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    // 创建 id与节点的映射关系 用于绘制连线
    const map = new Map(Array.from(allNodeRefs).map((ref) => {
      const [paddingLeft, paddingRight] = getElementStyle(ref.current as HTMLDivElement & { currentStyle: any }, 'paddingLeft', 'paddingRight')
      return [
        ref.current!.id,
        [
          ref.current!.offsetLeft + paddingLeft, // 距离距离自己最近具有定位的父元素的左边距离 简单理解为 从正方形左侧的边开始计算
          ref.current!.offsetLeft + ref.current!.offsetWidth - paddingRight, // 距离距离自己最近具有定位的父元素的左边距离 + 自己的宽度 同样可以简单理解为从正方形右侧的边开始计算
          ref.current!.offsetTop + ref.current!.offsetHeight / 2, // 距离距离自己最近具有定位的父元素的上边距离 + 自己的高度的一半 目的就是把自身的中线提前计算出来 不然连线的时候怎么知道具体连那个位置
          ref.current!.dataset.nodetype!,
        ] as const,
      ]
    }))
    drawLineCanvas(canvasRef, nodeTree, map)
  }, [allNodeRefs, uuid])
  return (
    <>
      <canvas ref={canvasRef} className='absolute inset-0 z-[-1]' id="canvas" width="1000" height="1000"></canvas>
    </>
  )
}
