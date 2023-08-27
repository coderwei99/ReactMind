import type { idToNodeMapType } from './types'
import { NodePosition, type NodeType } from '@/static'

// 绘制线段
export function drawLine(ctx: CanvasRenderingContext2D, nodes: NodeType, nodesMap: idToNodeMapType) {
  // 原始的节点nodes这里是一个具有父子关系的树形结构，所以我们需要先找到父亲的位置信息 也就意味着后续我们新增节点的时候也要保持这个父子关系 新增的时候就好判断多了
  /*
    example:
    {
      id: 1, 这里最顶层 也就是思维导图最中间那个那个节点 简单来说就是起点
      children:[
        他会有很多的儿子 只有一点需要注意:
          原始的节点信息没有保存这个节点的左右位置信息 刚开始我们是没办法判断这个节点究竟是位于左边还是右边的 也不应该开始就定义 应该根据不同的算法进行判断 我们是存到了自定义属性data-ndoetype的
        {
          id: 2,
          children: []
        },
        {
          id: 3,
          children: []
        }
      ]
    }
   */
  const { id: parent_id, children } = nodes
  if (children.length > 0) {
    // 先定位父亲的位置信息
    const [parent_x_left, parent_x_right, parent_y] = nodesMap.get(parent_id)!
    children.forEach((child) => {
      // 定位儿子的位置信息
      const childPosition = nodesMap.get(child.id)!
      if (childPosition) {
        const [child_x_left, child_x_right, child_y, position] = childPosition
        if (position === NodePosition.LEFT)
          drawBezier(ctx, parent_x_left, parent_y, child_x_right, child_y)
        // ctx.moveTo(parent_x_left, parent_y)
        // ctx.bezierCurveTo(parent_x_left, child_y, 0.9 * child_x_right + 0.1 * parent_x_left, child_y, child_x_right, child_y)

        else
          drawBezier(ctx, parent_x_right, parent_y, child_x_left, child_y)
        // ctx.moveTo(parent_x_right, parent_y)
        // ctx.bezierCurveTo(parent_x_right, child_y, 0.9 * child_x_left + 0.1 * parent_x_right, child_y, child_x_left, child_y)
      }
      drawLine(ctx, child, nodesMap)
    })
  }
}

function drawBezier(ctx: CanvasRenderingContext2D, from_x: number, from_y: number, to_x: number, to_y: number) {
  ctx.moveTo(from_x, from_y)
  ctx.bezierCurveTo(from_x, to_y, 0.9 * to_x + 0.1 * from_x, to_y, to_x, to_y)
}

// 连接节点之间的线段
export function drawLineCanvas(canvasRef: React.RefObject<HTMLCanvasElement>, nodeTree: NodeType, map: idToNodeMapType) {
  const ctx = canvasRef.current!.getContext('2d')!
  // 先清空画布 然后重新绘制线段
  ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = '#f3f'
  drawLine(ctx, nodeTree, map)
  ctx.stroke()
  ctx.closePath()
}

// 根据父id拿到所有的儿子信息
export function findChildrenOfParentId(parentId: string, nodeTree: NodeType): string[] {
  let children: string[] = []
  if (nodeTree.id === parentId) {
    nodeTree.children.forEach((c) => {
      children.push(c.id)
    })
  }
  else {
    nodeTree.children.forEach((child) => {
      children = children.concat(findChildrenOfParentId(parentId, child))
    })
  }
  return children
}

// 根据id从dom树中获取指定dom
export function getDomById(id: string, allNodeRefs: Map<string, React.RefObject<HTMLDivElement>>) {
  return allNodeRefs.get(id)!
}
