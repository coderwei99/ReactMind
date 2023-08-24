type attrKeyType = 'paddingLeft' | 'paddingRight'
export function getElementStyle(el: HTMLDivElement & { currentStyle: any }, ...attr: attrKeyType[]) {
  // currentStyle只有ie浏览器支持 非ie浏览器选择使用getComputedStyle
  if (el.currentStyle)
    return attr.map(styleKey => el.currentStyle[styleKey])
  else
    return attr.map(styleKey => getComputedStyle(el)[styleKey]).map(Number.parseFloat)
}
