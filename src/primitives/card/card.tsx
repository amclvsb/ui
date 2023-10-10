import {forwardRef} from 'react'
import {isValidElementType} from 'react-is'
import styled from 'styled-components'
import {useArrayProp} from '../../hooks'
import {
  responsiveBorderStyle,
  ResponsiveBorderStyleProps,
  responsiveRadiusStyle,
  ResponsiveRadiusStyleProps,
  responsiveShadowStyle,
  ResponsiveShadowStyleProps,
} from '../../styles/internal'
import {ThemeColorSchemeKey} from '../../theme'
import {ToneProvider} from '../../theme/toneContext/toneProvider'
import {useToneContext} from '../../theme/toneContext/useToneContext'
import {CardTone} from '../../types'
import {Box, BoxProps} from '../box'
import {ResponsiveBorderProps, ResponsiveRadiusProps, ResponsiveShadowProps} from '../types'
import {cardStyle} from './styles'
import {CardStyleProps} from './types'

/**
 * @public
 */
export interface CardProps
  extends BoxProps,
    ResponsiveBorderProps,
    ResponsiveRadiusProps,
    ResponsiveShadowProps {
  /**
   * Do not use in production.
   * @beta
   */
  __unstable_checkered?: boolean
  /**
   * Do not use in production.
   * @beta
   */
  __unstable_focusRing?: boolean
  pressed?: boolean
  scheme?: ThemeColorSchemeKey
  tone?: CardTone
}

const Root = styled(Box)<
  CardStyleProps &
    ResponsiveRadiusStyleProps &
    ResponsiveBorderStyleProps &
    ResponsiveShadowStyleProps
>(responsiveBorderStyle, responsiveRadiusStyle, responsiveShadowStyle, cardStyle)

/**
 * @public
 */
export const Card = forwardRef(function Card(
  props: CardProps & Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'height'>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    __unstable_checkered: checkered = false,
    __unstable_focusRing: focusRing = false,
    as: asProp,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    pressed,
    radius = 0,
    scheme: schemeProp,
    selected,
    shadow,
    tone: toneProp = 'default',
    ...restProps
  } = props

  const as = isValidElementType(asProp) ? asProp : 'div'
  const toneContext = useToneContext()
  const tone = toneProp === 'inherit' ? toneContext.tone : toneProp
  const scheme = schemeProp ?? toneContext.scheme

  return (
    <ToneProvider scheme={scheme} tone={tone}>
      <Root
        data-as={typeof as === 'string' ? as : undefined}
        data-scheme={scheme}
        data-ui="Card"
        data-tone={tone}
        $scheme={scheme ?? toneContext.scheme}
        {...restProps}
        $border={useArrayProp(border)}
        $borderTop={useArrayProp(borderTop)}
        $borderRight={useArrayProp(borderRight)}
        $borderBottom={useArrayProp(borderBottom)}
        $borderLeft={useArrayProp(borderLeft)}
        $checkered={checkered}
        $focusRing={focusRing}
        $radius={useArrayProp(radius)}
        $shadow={useArrayProp(shadow)}
        $tone={toneProp}
        data-checkered={checkered ? '' : undefined}
        data-pressed={pressed ? '' : undefined}
        data-selected={selected ? '' : undefined}
        forwardedAs={as}
        ref={ref}
        selected={selected}
      />
    </ToneProvider>
  )
})
