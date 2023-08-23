import type { NodeType } from '@/static'

interface IProps {
  node: NodeType
}

export default function Node({ node }: IProps) {
  return (
    <div className='w-auto h-auto max-w-[240px] break-words  p-[20px]' draggable>
      <div className='bg-slate-600 border-solid border-black border-[2px] p-[15px] rounded-[10px]' >
        <p>
          {node.text}
        </p>
      </div>
    </div>
  )
}
