import { useContext, useEffect, useRef } from 'react'
import TextArea from 'antd/es/input/TextArea'
import NodeMenu from '../NodeMenu'
import { NodePosition, XMIND_WRAPPER_CLASS_NAME } from '@/static'
import type { INodeMenuConfigType, NodeType } from '@/static'
import type { allNodeRefsType } from '@/utils/types'
import { DefaultNodeContext } from '@/context'
import { useNodeMenuClick } from '@/hooks/useNodeMenuClick'

interface IProps {
  node: NodeType
  allNodeRefs: allNodeRefsType
  onLeft: boolean
  parentId: string | number
  showBorderId: string
  setShowBorderId: (id: string) => void
  editNodeId: string
  setEditNodeId: (id: string) => void
  reRenderLine: () => void
}

export default function Node({
  node,
  allNodeRefs,
  onLeft,
  parentId,
  showBorderId,
  setShowBorderId,
  editNodeId,
  setEditNodeId,
  reRenderLine,
}: IProps) {
  const { nodes: { nodesDispatch } } = useContext(DefaultNodeContext)
  const menuHandles = useNodeMenuClick(nodesDispatch)
  const textAreaRef = useRef<HTMLTextAreaElement & {
    resizableTextArea: {
      textArea: HTMLTextAreaElement
    }
  }>(null)
  // 将所有渲染的node节点都保存起来 然后放到一个set里面,set主要是为了去重,避免用户多次拖拽同一个节点
  const nodeRef = useRef<HTMLDivElement | null>(null)
  // 保存用户输入框输入的值 不需要用来更新界面
  let inpuValue = ''

  useEffect(() => {
    // 渲染的时候就将节点保存起来
    allNodeRefs.add(nodeRef)
    // 获取外层容器 监听是否被点击 点击的话取消所有的状态(边框 or 修改状态)
    const wrapper = document.getElementById(XMIND_WRAPPER_CLASS_NAME)
    const handleWrapperClick = () => {
      setShowBorderId('')
    }
    wrapper?.addEventListener('click', handleWrapperClick)
    return () => {
      // 删除的时候也要从set里面删除
      allNodeRefs.delete(nodeRef)
      wrapper?.removeEventListener('click', handleWrapperClick)
    }
  }, [nodeRef])

  // 节点的点击事件
  const handleNodeClick = (e: React.MouseEvent<HTMLDivElement>, nodeId: string) => {
    // 如果编辑节点的id等于用户点击的节点的id 那就说明 用户在编辑某个节点 然后点击了他 这个时候不需要处理他的点击事件 他可能只是在切换光标的位置罢了
    if (editNodeId === nodeId)
      return
    ; (e.target as HTMLDivElement).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
    setShowBorderId(nodeId)
  }

  // 节点双击事件
  const handleDoubleClick = (nodeId: string) => {
    setShowBorderId('')
    setEditNodeId(nodeId)
    // 让input自动聚焦
    setTimeout(() => {
      textAreaRef.current?.focus()
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 这里用户会不停的输入,不要去不停的给context中的节点树对应的节点重新赋值 保存起来 按下enter的时候更新一次
    inpuValue = e.currentTarget.value
  }

  // 输入框回车事件
  // todo: 用户在输入框 复制粘贴 监听不到粘贴后的值
  const handleEnterPress = () => {
    if (!inpuValue) {
      setEditNodeId('')
      reRenderLine()
      return
    }
    // todo: 更新对应节点的text 这里是否考虑更新节点的text而不去重新reRender(即不去通过context去修改上下文的节点树信息) 我界面直接展示用户修改的值 毕竟节点可能会很多 重新绘制成本也比较大
    // 思路: 可能需要维护一个静态节点树 context上下文的默认展示的节点每次都去这里去拿 有待商榷
    setEditNodeId('')
    nodesDispatch({
      type: 'EDIT_NODE',
      payload: {
        id: node.id,
        newText: inpuValue,
      },
    })
  }

  // 失去焦点 同样当回车处理
  const handleInputBlur = () => {
    // 如果inputValue为空字符串 意味着用户双击进入编辑状态 什么都没干就取消了 这种情况下我们退出编辑状态即可
    if (!inpuValue) {
      setEditNodeId('')
      reRenderLine()
      return
    }
    handleEnterPress()
  }

  // 鼠标右键事件
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    // 先阻止默认的右键行为 弹出浏览器菜单
    e.preventDefault()
  }

  useEffect(() => {
    if (textAreaRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        reRenderLine()
      })
      resizeObserver.observe(textAreaRef.current.resizableTextArea.textArea)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [editNodeId])

  // 处理节点菜单的点击事件
  const handleMenuItemClick = (keyName: INodeMenuConfigType['keyName']) => {
    menuHandles[keyName](node.id, handleDoubleClick)
  }
  return (
    <div
      id={node.id}
      className='w-auto h-auto max-w-[240px] break-words p-[20px] relative'
      ref={nodeRef}
      data-nodetype={onLeft ? NodePosition.LEFT : NodePosition.RIGHT}
      data-parentid={parentId}
      onClick={e => handleNodeClick(e, node.id)}
    >
      <NodeMenu
        showBorderId={showBorderId}
        node={node}
        handleMenuItemClick={handleMenuItemClick}
      />
      <div
        className={'bg-slate-600 border-solid border-black border-[2px] p-[15px] rounded-[10px]'}
        style={{ boxShadow: `${showBorderId === node.id ? '0 0 0 3px #ffffff, 0 0 0 6px red' : ''}` }}
        draggable={node.id !== 'node_root'}
        id={node.id}
        data-nodetype={onLeft ? NodePosition.LEFT : NodePosition.RIGHT}
        data-parentid={parentId}
        onDoubleClick={() => handleDoubleClick(node.id)}
        onContextMenu={handleContextMenu}
      >
        {
          editNodeId === node.id
            ? <TextArea
              ref={textAreaRef}
              // ref={inputRef}
              defaultValue={node.text}
              className="focus:outline-none"
              bordered={false}
              autoSize
              onPressEnter={handleEnterPress}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              style={{ backgroundColor: 'white' }}
            />
            : <p
              id={node.id}
              className='min-w-[40px] select-none'
              data-parentid={parentId}
              data-nodetype={onLeft ? NodePosition.LEFT : NodePosition.RIGHT}
            >
              {node.text}
            </p>

        }
      </div>
    </div>
  )
}
