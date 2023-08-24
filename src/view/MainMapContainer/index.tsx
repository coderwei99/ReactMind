import MainMap from '../MindMap'
import { type NodeType } from '@/static'

interface IProps { defaultNode: NodeType }

export default function MainMapContainer({ defaultNode }: IProps) {
  return (
    <>
      {/* 思维导图组件  本项目的核心逻辑都在这个组件了 */}
      <MainMap defaultNode={defaultNode}/>
    </>
  )
}
