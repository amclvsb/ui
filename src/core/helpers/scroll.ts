/**
 * @internal
 */
export function _isScrollable(el: Node): boolean {
  if (!(el instanceof Element)) return false

  // @TODO check if this is called during render
  const style = window.getComputedStyle(el)

  return (
    style.overflowX.includes('auto') ||
    style.overflowX.includes('scroll') ||
    style.overflowY.includes('auto') ||
    style.overflowY.includes('scroll')
  )
}
