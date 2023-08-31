import MenuItem from './cpns/menuItem'
import type { INodeMenuConfigType, NodeType } from '@/static'
import { nodeMenuConfig } from '@/static'

interface IProps {
  showBorderId: string
  node: NodeType
  handleMenuItemClick: (keyName: INodeMenuConfigType['keyName']) => void
}

export default function NodeMenu({ showBorderId, node, handleMenuItemClick }: IProps) {
  return (
    <div
      className='absolute bg-slate-200 w-[250px] h-[40px] rounded-[5px] top-[-22px]'
      style={{ display: `${showBorderId === node.id ? 'block' : 'none'}` }}

    >
      <div className='flex justify-between'>
        {
          nodeMenuConfig.map((item) => {
            return (
              <MenuItem onClick={handleMenuItemClick} key={item.keyName} keyName={item.keyName} name={item.name} >{item.icon}</MenuItem>
            )
          })
        }
      </div>
    </div>
  )
}
