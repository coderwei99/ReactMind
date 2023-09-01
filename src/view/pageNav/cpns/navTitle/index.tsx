import { useRef, useState } from 'react'
import { keyMappings } from '@/static'

export default function NavTitle() {
  const [title, setTitle] = useState('未命名导图')
  const divRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleTitleClick = () => {
    divRef.current!.style.display = 'none'
    inputRef.current!.style.display = 'block'
    inputRef.current!.focus()
  }
  const handleInputBlur = () => {
    divRef.current!.style.display = 'block'
    inputRef.current!.style.display = 'none'
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const handleEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === keyMappings.ENTER)
      inputRef.current?.blur()
  }
  return (
    <div className="w-[120px] text-center leading-[48px] select-none flex justify-center items-center"
      onDoubleClick={handleTitleClick}
    >
      <div ref={divRef}>{title}</div>
      <input
        ref={inputRef}
        type="text"
        value={title}
        className="w-full h-[24px] text-center hidden focus:outline-none border-b border-b-fuchsia-700"
        onKeyDown={handleEnterPress}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </div>
  )
}
