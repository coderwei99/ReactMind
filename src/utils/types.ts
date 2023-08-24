// 这里存放一些多个子组件都需要用到的公共类型定义 因为这些类型你定义在那个子组件都不合适 还是要抽到最顶层

// 渲染的所有节点的ref集合类型
export type allNodeRefsType = Set<React.RefObject<HTMLDivElement>>

// id与绘制的节点之间的映射关系: 通过id 我们可以拿到我们想要拿到的具有这个id的节点的位置信息 比如说left top nodetype(是左边的还是右边的)
type nodePositionType = readonly [number, number, number, string]
export type idToNodeMapType = Map<string, nodePositionType>
