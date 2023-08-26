import SubNode from '@/component/subNode/idnex'
import Node from '@/component/Node'
import type { NodeType } from '@/static'
import type { allNodeRefsType } from '@/utils/types'

interface IProps {
  defaultNode: NodeType
  allNodeRefs: allNodeRefsType
}

export default function RootNode({ defaultNode, allNodeRefs }: IProps) {
  // 平均分成两份 一份在左侧 一份在右侧
  const harf = defaultNode.children.length >> 1
  return (
    <div className={'flex items-center justify-center'}>
      {/* 左侧的节点 */}
      <div className=''>
        {defaultNode.children.slice(harf).map((node) => {
          return <SubNode node={node} nodePosition='left' key={node.id} allNodeRefs={allNodeRefs} onLeft={true} />
        })}
      </div>
      {/* 主题 也就是最中间那个节点 */}
      <div className='flex items-center'>
        <div>
          <Node node={defaultNode} allNodeRefs={allNodeRefs} onLeft={false}></Node>
        </div>
      </div>
      {/* 右侧的节点 */}
      <div className=''>
        {defaultNode.children.slice(0, harf).map((node) => {
          return <SubNode node={node} nodePosition='right' key={node.id} allNodeRefs={allNodeRefs} onLeft={false} />
        })}
      </div>
    </div>
  )
}
