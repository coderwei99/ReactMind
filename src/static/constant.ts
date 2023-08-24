import type { allNodeRefsType } from '@/utils/types'

// 思维导图盒子的类名
export const XMIND_WRAPPER_CLASS_NAME = 'xmind-wrapper'

export const allNodeRefs: allNodeRefsType = new Set()

// 标志节点位于左边还是右边
export enum NodePosition {
  LEFT = 'node_left',
  RIGHT = 'node_right',
}
