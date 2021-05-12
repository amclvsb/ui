import React, {forwardRef} from 'react'
import styled from 'styled-components'
import {
  flexItemStyle,
  FlexItemStyleProps,
  responsiveFlexStyle,
  ResponsiveFlexStyleProps,
} from '../../styles/internal'
import {Box, BoxProps} from '../box'
import {ResponsiveFlexProps, ResponsiveFlexItemProps} from '../types'

export interface FlexProps
  extends Omit<BoxProps, 'display'>,
    ResponsiveFlexProps,
    ResponsiveFlexItemProps {
  gap?: number | number[]
}

const Root = styled(Box)<FlexItemStyleProps & ResponsiveFlexStyleProps>(
  flexItemStyle,
  responsiveFlexStyle
)

export const Flex = forwardRef(function Flex(
  props: FlexProps & Omit<React.HTMLProps<HTMLDivElement>, 'wrap'>,
  ref
) {
  const {align, as, direction = 'row', gap, justify, wrap, ...restProps} = props

  return (
    <Root
      data-ui="Flex"
      {...restProps}
      $align={align}
      $direction={direction}
      $gap={gap}
      $justify={justify}
      $wrap={wrap}
      forwardedAs={as}
      ref={ref}
    />
  )
})
