import {css} from 'styled-components'
import {ThemeProps} from '../../styles'

export function labelBaseStyle(props: {accent?: boolean; muted: boolean} & ThemeProps) {
  const {accent, theme, muted} = props

  return css`
    text-transform: uppercase;

    &:before {
      content: '';
      display: block;
      height: 0;
    }

    &:after {
      content: '';
      display: block;
      height: 0;
    }

    ${accent &&
    css`
      color: var(--card-accent-fg-color);
    `}

    ${muted &&
    css`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${theme.sanity.fonts.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `
}
