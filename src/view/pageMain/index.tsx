import { useContext } from 'react'
import MainMapContainer from '../MainMapContainer'
import { DefaultNodeContext } from '@/context'

export default function index() {
  const { nodes } = useContext(DefaultNodeContext)
  const { nodesState } = nodes
  return (
    <div className='absolute'>
      {/* 思维导图组件容器 */}
      <MainMapContainer defaultNode={nodesState}></MainMapContainer>
    </div>
  )
}
