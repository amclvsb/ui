import React, {useMemo} from 'react'
import {BoundaryElementContext} from './boundaryElementContext'
import {BoundaryElementContextValue} from './types'

/**
 * @public
 */
export function BoundaryElementProvider({
  children,
  element,
}: {
  children: React.ReactNode
  element: HTMLElement | null
}) {
  const value: BoundaryElementContextValue = useMemo(() => ({version: 0.0, element}), [element])

  return <BoundaryElementContext.Provider value={value}>{children}</BoundaryElementContext.Provider>
}
