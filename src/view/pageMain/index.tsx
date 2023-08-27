import { useContext } from 'react'
import MainMapContainer from '../MainMapContainer'
import { DefaultNodeContext } from '@/context'

export default function index() {
  const { nodes } = useContext(DefaultNodeContext)
  const { nodesState } = nodes
  return (
    <div className='relative flex justify-center items-center h-full px-[30vw] py-[30vh]'>
      {/* 思维导图组件容器 */}
      <MainMapContainer defaultNode={nodesState}></MainMapContainer>
    </div>
  )
}
