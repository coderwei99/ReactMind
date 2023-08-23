import Node from '@/component/Node'
import SubNode from '@/component/subNode/idnex'

import { type NodeType, XMIND_WRAPPER_CLASS_NAME } from '@/static'

interface IProps { defaultNode: NodeType }

export default function MainMap({ defaultNode }: IProps) {
  // 平均分成两份 一份在左侧 一份在右侧
  const harf = defaultNode.children.length >> 1
  return (
    <div className={`${XMIND_WRAPPER_CLASS_NAME} flex items-center justify-center`}>
      {/* 左侧的节点 */}
      <div className=''>
        {defaultNode.children.slice(harf).map((node) => {
          return <SubNode node={node} nodePosition='left' key={node.id} />
        })}
      </div>
      {/* 主题 也就是最中间那个节点 */}
      <div className='flex items-center'>
        <div>
          <Node node={defaultNode}></Node>
        </div>
      </div>
      {/* 右侧的节点 */}
      <div className=''>
        {defaultNode.children.slice(0, harf).map((node) => {
          return <SubNode node={node} nodePosition='right' key={node.id} />
        })}
      </div>
    </div>
  )
}
