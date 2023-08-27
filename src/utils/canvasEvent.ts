import { findChildrenOfParentId } from './canvasHelp'
import type { allNodeRefsType, dragEventNameType, mindNodeActionType } from './types'
import type { NodeType } from '@/static'

export function getCanvasEvent(
  canvas: HTMLCanvasElement,
  nodes: NodeType,
  allNodeRefs: allNodeRefsType,
  mindNodeActionHook: mindNodeActionType,
): {
    eventName: dragEventNameType
    listenEvent: (e: DragEvent) => void
  }[] {
  const { moveNode } = mindNodeActionHook
  let domMapposition: Map<string, number[]> = new Map()

  // 保存目标dom的id 就是要插入的位置的下一个dom 后续我们将拖拽节点插入到这个dom前面即可
  let target_dom_id: string | null = null
  // 拖拽元素的id
  let drag_dom_id: string | null = null
  // 初始化一些后续触发拖拽方法所用到的数据
  function initData(allNodeRefs: allNodeRefsType) {
    // [id,[需要的位置数据]]
    const map = new Map(
      [...allNodeRefs].map((domRef) => {
        const dom = domRef.current
        const id: string = dom!.id
        return [
          id!,
          [
            dom!.offsetLeft,
            dom!.offsetTop,
            dom!.offsetWidth,
            dom!.offsetHeight,
            dom!.offsetLeft + dom!.offsetWidth,
            dom!.offsetTop + dom!.offsetHeight,
          ],
        ]
      }),
    )

    return map
  }

  domMapposition = initData(allNodeRefs)

  return [
    // 开始拖动dom的一瞬间触发一次
    {
      eventName: 'dragstart',
      listenEvent: (e: DragEvent) => {
        drag_dom_id = (e.target as HTMLDivElement).id
      },
    },
    // 拖动的过程中会一直触发
    {
      eventName: 'drag',
      listenEvent: (e: DragEvent) => {
        // console.log('fs', e.x, e.currentTarget.offsetTop)
      },
    },
    // 拖动到有效区域松开鼠标时触发
    {
      eventName: 'drop',
      listenEvent: (e: DragEvent) => {
        const parentId = (e.target as HTMLDivElement).dataset.parentid!
        const mouseX = e.x
        const mouseY = e.y
        // 根据这个父亲的id去nodes拿到 所有的子节点 我们目前是看亲子节点 就是不管子节点的子节点
        const children = findChildrenOfParentId(parentId, nodes)
        children.forEach((c_id) => {
          const pos = domMapposition.get(c_id as string)!
          /**
         * happy path
         * 1. 首先需要大于元素的offsetLeft 以及 offsetTop
         * 2. 找到这个目标节点 然后进行换位
         */
          if (mouseX > pos[0] && mouseY > pos[1]) {
            // 说明找到了目标节点
            target_dom_id = c_id
            // 移动节点
            moveNode(drag_dom_id!, target_dom_id!)
          }
        })
      },
    },
    {
      eventName: 'dragover',
      listenEvent: (e: DragEvent) => {
        // q: 为什么要阻止默认事件？
        // a: 阻止默认事件，否则无法触发drop事件
        // q: 为什么无法触发?
        // a: 因为默认情况下，浏览器不允许拖放元素到其他元素中。要想实现拖放，必须阻止浏览器默认行为。
        e.preventDefault()
      },
    },
  ]
}
