import {getTheme_v2} from '@sanity/ui/theme'
import {forwardRef} from 'react'
import {styled, css} from 'styled-components'
import {EMPTY_RECORD} from '../../constants'
import {rem, _responsive, ThemeProps, _getArrayProp} from '../../styles'
import {AvatarSize} from '../../types'
import {Label} from '../label'

function _responsiveAvatarCounterSizeStyle(props: {$size: AvatarSize[]} & ThemeProps) {
  const {avatar, media} = getTheme_v2(props.theme)

  return _responsive(media, props.$size, (size) => {
    const avatarSize = avatar.sizes[size]

    if (!avatarSize) return EMPTY_RECORD

    return {
      borderRadius: rem(avatarSize.size / 2),
      minWidth: rem(avatarSize.size),
      height: rem(avatarSize.size),
    }
  })
}

function _avatarCounterBaseStyle(props: ThemeProps) {
  const {space} = getTheme_v2(props.theme)

  return css`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${rem(space[2])};

    &:not([hidden]) {
      display: flex;
    }
  `
}

const Root = styled.div<{$size: AvatarSize[]}>(
  _responsiveAvatarCounterSizeStyle,
  _avatarCounterBaseStyle,
)

/**
 * @public
 */
export interface AvatarCounterProps {
  count: number
  size?: AvatarSize | AvatarSize[]
  /** @deprecated No longer supported. */
  tone?: 'navbar'
}

/**
 * @public
 */
export const AvatarCounter = forwardRef(function AvatarCounter(
  props: AvatarCounterProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {count, size} = props
  const $size = _getArrayProp(size ?? 1)
  const fontSize = $size.map((s) => {
    if (s === 1) return 1
    if (s === 2) return 3
    if (s === 3) return 5

    return 0
  })

  return (
    <Root $size={$size} data-ui="AvatarCounter" ref={ref}>
      <Label as="span" size={fontSize} weight="medium">
        {count}
      </Label>
    </Root>
  )
})
