import {ChevronRightIcon} from '@sanity/icons'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {Box, Card, Popover, PopoverProps, Text} from '../../primitives'
import {Menu} from './menu'
import {useMenu} from './useMenu'

/**
 * @public
 */
export interface MenuGroupProps {
  fontSize?: number | number[]
  padding?: number | number[]
  popover?: Omit<PopoverProps, 'content' | 'open'>
  radius?: number | number[]
  text: React.ReactNode
}

const MOUSE_LEAVE_TIMEOUT = 1000

const TextContainer = styled.span`
  &:not([hidden]) {
    display: flex;
  }

  & > div:first-child {
    flex: 1;
    min-width: 0;
  }
`

/**
 * @public
 */
export function MenuGroup(
  props: MenuGroupProps & Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'height' | 'ref'>
) {
  const {
    children,
    fontSize,
    onClick,
    padding = 3,
    popover = {},
    radius = 2,
    text,
    ...restProps
  } = props
  const [open, setOpen] = useState(false)
  const {
    mount,
    onClickOutside,
    onEscape,
    onItemClick,
    onMouseEnter,
    onMouseLeave,
    registerElement,
  } = useMenu()
  const rootRef = useRef<HTMLButtonElement | null>(null)
  const mouseLeaveTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const shouldFocusRef = useRef<'first' | 'last' | null>(null)

  useEffect(() => mount(rootRef.current), [mount])

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current)
        mouseLeaveTimeoutRef.current = null
      }

      onMouseEnter(event)
      setOpen(true)
    },
    [onMouseEnter]
  )

  const handleMouseLeave = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      onMouseLeave(event)

      mouseLeaveTimeoutRef.current = setTimeout(() => {
        setOpen(false)
      }, MOUSE_LEAVE_TIMEOUT)
    },
    [onMouseLeave]
  )

  const handleMenuKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.stopPropagation()

      setOpen(false)

      requestAnimationFrame(() => {
        rootRef.current?.focus()
      })
    }
  }, [])

  const handleMenuMouseEnter = useCallback(() => {
    if (mouseLeaveTimeoutRef.current) {
      clearTimeout(mouseLeaveTimeoutRef.current)
      mouseLeaveTimeoutRef.current = null
    }
  }, [])

  const handleMenuMouseLeave = useCallback(() => {
    mouseLeaveTimeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, MOUSE_LEAVE_TIMEOUT)
  }, [])

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) onClick(event)

      shouldFocusRef.current = 'first'

      setOpen(true)

      requestAnimationFrame(() => {
        shouldFocusRef.current = null
      })
    },
    [onClick]
  )

  const handleItemClick = useCallback(() => {
    setOpen(false)
    if (onItemClick) onItemClick()
  }, [onItemClick])

  useEffect(() => {
    return () => {
      if (mouseLeaveTimeoutRef.current !== null) {
        clearTimeout(mouseLeaveTimeoutRef.current)
        mouseLeaveTimeoutRef.current = null
      }
    }
  }, [])

  const content = (
    <Menu
      onClickOutside={onClickOutside}
      onEscape={onEscape}
      onItemClick={handleItemClick}
      onKeyDown={handleMenuKeyDown}
      onMouseEnter={handleMenuMouseEnter}
      onMouseLeave={handleMenuMouseLeave}
      registerElement={registerElement}
      shouldFocus={shouldFocusRef.current}
    >
      {children}
    </Menu>
  )

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const target = event.currentTarget

    if (document.activeElement !== target) {
      return
    }

    if (event.key === 'ArrowRight') {
      shouldFocusRef.current = 'first'

      setOpen(true)

      requestAnimationFrame(() => {
        shouldFocusRef.current = null
      })

      return
    }
  }, [])

  return (
    <Popover {...popover} content={content} data-ui="MenuGroup__popover" open={open}>
      <Card
        as="button"
        data-ui="MenuGroup"
        {...restProps}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        radius={radius}
        ref={rootRef}
        selected={open}
        tabIndex={-1}
      >
        <Box padding={padding}>
          <TextContainer>
            <Text size={fontSize}>{text}</Text>
            <Text size={fontSize}>
              <ChevronRightIcon />
            </Text>
          </TextContainer>
        </Box>
      </Card>
    </Popover>
  )
}
