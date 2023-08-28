import type { NodeType } from '@/static'

// 这个目录下面的所有文件都是为了开发过程中的辅助开发的帮助工具函数 不会被打包到最终的文件中 比如说我们需要打印出当前的树结构方便我们调试 就可以定义在这里
export function logChildrenId(nodes: NodeType) {
  // eslint-disable-next-line no-console
  console.log(nodes.id)
  nodes.children.forEach((node) => {
    logChildrenId(node)
  })
}
