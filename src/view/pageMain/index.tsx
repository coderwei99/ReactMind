import { useContext, useRef } from 'react'
import MainMapContainer from '../MainMapContainer'
import { DefaultNodeContext } from '@/context'

export default function index() {
  const { nodes } = useContext(DefaultNodeContext)
  const nodeContainerRef = useRef<HTMLDivElement>(null)
  const { nodesState } = nodes
  return (
    <div className='p-[300px]' ref={nodeContainerRef}>
      {/* 思维导图组件容器 */}
      <MainMapContainer nodeContainerRef={nodeContainerRef} defaultNode={nodesState}></MainMapContainer>
    </div>
  )
}
