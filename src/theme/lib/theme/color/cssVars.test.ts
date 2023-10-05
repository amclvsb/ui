import {ColorTints, hues} from '@sanity/color'
import {createVars} from './cssVars'
import {ThemeColorName} from './types'

export const tones: Record<ThemeColorName, ColorTints> = {
  default: hues.gray,
  transparent: hues.gray,
  primary: hues.gray,
  positive: hues.cyan,
  caution: hues.yellow,
  critical: hues.red,
} as const

describe('css variables', () => {
  it('Should create the variables when no default tone is provided', () => {
    const result = createVars('light', tones)
    const expected = [
      {name: '--default-text_primary', value: '#272a2e'},
      {name: '--default-text_secondary', value: '#6e7683'},
      {name: '--default-text_tertiary', value: '#b6bcc6'},
      {name: '--default-bg_base', value: '#fff'},
      {name: '--default-bg_base_hover', value: '#f2f3f5'},
      {name: '--default-bg_base_active', value: '#e6e8ec'},
      {name: '--default-bg_accent', value: '#272a2e'},
      {name: '--default-bg_accent_hover', value: '#1b1d20'},
      {name: '--default-bg_accent_active', value: '#101112'},
      {name: '--default-bg_tint', value: '#f2f3f5'},
      {name: '--default-icon_default', value: '#8690a0'},
      {name: '--default-icon_inverted', value: '#fff'},
      {name: '--default-border_base', value: '#e6e8ec'},
      {name: '--default-border_base_hover', value: '#ced2d9'},
      {name: '--default-border_accent', value: '#6e7683'},
      {name: '--default-border_accent_inverted', value: '#fff'},
      {name: '--transparent-text_primary', value: '#272a2e'},
      {name: '--transparent-text_secondary', value: '#6e7683'},
      {name: '--transparent-text_tertiary', value: '#b6bcc6'},
      {name: '--transparent-bg_base', value: '#fff'},
      {name: '--transparent-bg_base_hover', value: '#f2f3f5'},
      {name: '--transparent-bg_base_active', value: '#e6e8ec'},
      {name: '--transparent-bg_accent', value: '#8690a0'},
      {name: '--transparent-bg_accent_hover', value: '#6e7683'},
      {name: '--transparent-bg_accent_active', value: '#565d67'},
      {name: '--transparent-bg_tint', value: '#f2f3f5'},
      {name: '--transparent-icon_default', value: '#8690a0'},
      {name: '--transparent-icon_inverted', value: '#fff'},
      {name: '--transparent-border_base', value: '#e6e8ec'},
      {name: '--transparent-border_base_hover', value: '#ced2d9'},
      {name: '--transparent-border_accent', value: '#8690a0'},
      {name: '--transparent-border_accent_inverted', value: '#fff'},
      {name: '--primary-text_primary', value: '#272a2e'},
      {name: '--primary-text_secondary', value: '#6e7683'},
      {name: '--primary-text_tertiary', value: '#b6bcc6'},
      {name: '--primary-bg_base', value: '#fff'},
      {name: '--primary-bg_base_hover', value: '#f2f3f5'},
      {name: '--primary-bg_base_active', value: '#e6e8ec'},
      {name: '--primary-bg_accent', value: '#272a2e'},
      {name: '--primary-bg_accent_hover', value: '#1b1d20'},
      {name: '--primary-bg_accent_active', value: '#101112'},
      {name: '--primary-bg_tint', value: '#f2f3f5'},
      {name: '--primary-icon_default', value: '#8690a0'},
      {name: '--primary-icon_inverted', value: '#fff'},
      {name: '--primary-border_base', value: '#e6e8ec'},
      {name: '--primary-border_base_hover', value: '#ced2d9'},
      {name: '--primary-border_accent', value: '#6e7683'},
      {name: '--primary-border_accent_inverted', value: '#fff'},
      {name: '--positive-text_primary', value: '#133237'},
      {name: '--positive-text_secondary', value: '#1c97a8'},
      {name: '--positive-text_tertiary', value: '#59e3f6'},
      {name: '--positive-bg_base', value: '#fff'},
      {name: '--positive-bg_base_hover', value: '#f2f3f5'},
      {name: '--positive-bg_base_active', value: '#e3fafd'},
      {name: '--positive-bg_accent', value: '#22daf4'},
      {name: '--positive-bg_accent_hover', value: '#1fb8ce'},
      {name: '--positive-bg_accent_active', value: '#1c97a8'},
      {name: '--positive-bg_tint', value: '#e3fafd'},
      {name: '--positive-icon_default', value: '#1fb8ce'},
      {name: '--positive-icon_inverted', value: '#fff'},
      {name: '--positive-border_base', value: '#c7f5fc'},
      {name: '--positive-border_base_hover', value: '#90ecf9'},
      {name: '--positive-border_accent', value: '#22daf4'},
      {name: '--positive-border_accent_inverted', value: '#fff'},
      {name: '--caution-text_primary', value: '#312c14'},
      {name: '--caution-text_secondary', value: '#967e1c'},
      {name: '--caution-text_tertiary', value: '#fbd024'},
      {name: '--caution-bg_base', value: '#fff'},
      {name: '--caution-bg_base_hover', value: '#fef7da'},
      {name: '--caution-bg_base_active', value: '#fdefb6'},
      {name: '--caution-bg_accent', value: '#b7991e'},
      {name: '--caution-bg_accent_hover', value: '#967e1c'},
      {name: '--caution-bg_accent_active', value: '#746219'},
      {name: '--caution-bg_tint', value: '#fef7da'},
      {name: '--caution-icon_default', value: '#b7991e'},
      {name: '--caution-icon_inverted', value: '#fff'},
      {name: '--caution-border_base', value: '#fdefb6'},
      {name: '--caution-border_base_hover', value: '#fcdf6d'},
      {name: '--caution-border_accent', value: '#b7991e'},
      {name: '--caution-border_accent_inverted', value: '#fff'},
      {name: '--critical-text_primary', value: '#3c1a17'},
      {name: '--critical-text_secondary', value: '#c33529'},
      {name: '--critical-text_tertiary', value: '#f68b82'},
      {name: '--critical-bg_base', value: '#fff'},
      {name: '--critical-bg_base_hover', value: '#fdebea'},
      {name: '--critical-bg_base_active', value: '#fcd8d5'},
      {name: '--critical-bg_accent', value: '#f03e2f'},
      {name: '--critical-bg_accent_hover', value: '#c33529'},
      {name: '--critical-bg_accent_active', value: '#962c23'},
      {name: '--critical-bg_tint', value: '#fdebea'},
      {name: '--critical-icon_default', value: '#f03e2f'},
      {name: '--critical-icon_inverted', value: '#fff'},
      {name: '--critical-border_base', value: '#fcd8d5'},
      {name: '--critical-border_base_hover', value: '#f9b1ab'},
      {name: '--critical-border_accent', value: '#f03e2f'},
      {name: '--critical-border_accent_inverted', value: '#fff'},
    ]

    expect(result).toEqual(expected)
  })
  it('Should create the variables when a default tone is provided', () => {
    const defaultVariables = createVars('light', tones)

    const result = createVars('light', tones, 'caution')
    const expected = [
      {
        name: '--default-text_primary',
        value: defaultVariables.find((v) => v.name === '--caution-text_primary')?.value,
      },
      {
        name: '--default-text_secondary',
        value: defaultVariables.find((v) => v.name === '--caution-text_secondary')?.value,
      },
      {
        name: '--default-text_tertiary',
        value: defaultVariables.find((v) => v.name === '--caution-text_tertiary')?.value,
      },
      {
        name: '--default-bg_base',
        value: defaultVariables.find((v) => v.name === '--caution-bg_base')?.value,
      },
      {
        name: '--default-bg_base_hover',
        value: defaultVariables.find((v) => v.name === '--caution-bg_base_hover')?.value,
      },
      {
        name: '--default-bg_base_active',
        value: defaultVariables.find((v) => v.name === '--caution-bg_base_active')?.value,
      },
      {
        name: '--default-bg_accent',
        value: defaultVariables.find((v) => v.name === '--caution-bg_accent')?.value,
      },
      {
        name: '--default-bg_accent_hover',
        value: defaultVariables.find((v) => v.name === '--caution-bg_accent_hover')?.value,
      },
      {
        name: '--default-bg_accent_active',
        value: defaultVariables.find((v) => v.name === '--caution-bg_accent_active')?.value,
      },
      {
        name: '--default-bg_tint',
        value: defaultVariables.find((v) => v.name === '--caution-bg_tint')?.value,
      },
      {
        name: '--default-icon_default',
        value: defaultVariables.find((v) => v.name === '--caution-icon_default')?.value,
      },
      {
        name: '--default-icon_inverted',
        value: defaultVariables.find((v) => v.name === '--caution-icon_inverted')?.value,
      },
      {
        name: '--default-border_base',
        value: defaultVariables.find((v) => v.name === '--caution-border_base')?.value,
      },
      {
        name: '--default-border_base_hover',
        value: defaultVariables.find((v) => v.name === '--caution-border_base_hover')?.value,
      },
      {
        name: '--default-border_accent',
        value: defaultVariables.find((v) => v.name === '--caution-border_accent')?.value,
      },
      {
        name: '--default-border_accent_inverted',
        value: defaultVariables.find((v) => v.name === '--caution-border_accent_inverted')?.value,
      },

      // Rest of variables are kept the same
      {name: '--transparent-text_primary', value: '#272a2e'},
      {name: '--transparent-text_secondary', value: '#6e7683'},
      {name: '--transparent-text_tertiary', value: '#b6bcc6'},
      {name: '--transparent-bg_base', value: '#fff'},
      {name: '--transparent-bg_base_hover', value: '#f2f3f5'},
      {name: '--transparent-bg_base_active', value: '#e6e8ec'},
      {name: '--transparent-bg_accent', value: '#8690a0'},
      {name: '--transparent-bg_accent_hover', value: '#6e7683'},
      {name: '--transparent-bg_accent_active', value: '#565d67'},
      {name: '--transparent-bg_tint', value: '#f2f3f5'},
      {name: '--transparent-icon_default', value: '#8690a0'},
      {name: '--transparent-icon_inverted', value: '#fff'},
      {name: '--transparent-border_base', value: '#e6e8ec'},
      {name: '--transparent-border_base_hover', value: '#ced2d9'},
      {name: '--transparent-border_accent', value: '#8690a0'},
      {name: '--transparent-border_accent_inverted', value: '#fff'},
      {name: '--primary-text_primary', value: '#272a2e'},
      {name: '--primary-text_secondary', value: '#6e7683'},
      {name: '--primary-text_tertiary', value: '#b6bcc6'},
      {name: '--primary-bg_base', value: '#fff'},
      {name: '--primary-bg_base_hover', value: '#f2f3f5'},
      {name: '--primary-bg_base_active', value: '#e6e8ec'},
      {name: '--primary-bg_accent', value: '#272a2e'},
      {name: '--primary-bg_accent_hover', value: '#1b1d20'},
      {name: '--primary-bg_accent_active', value: '#101112'},
      {name: '--primary-bg_tint', value: '#f2f3f5'},
      {name: '--primary-icon_default', value: '#8690a0'},
      {name: '--primary-icon_inverted', value: '#fff'},
      {name: '--primary-border_base', value: '#e6e8ec'},
      {name: '--primary-border_base_hover', value: '#ced2d9'},
      {name: '--primary-border_accent', value: '#6e7683'},
      {name: '--primary-border_accent_inverted', value: '#fff'},
      {name: '--positive-text_primary', value: '#133237'},
      {name: '--positive-text_secondary', value: '#1c97a8'},
      {name: '--positive-text_tertiary', value: '#59e3f6'},
      {name: '--positive-bg_base', value: '#fff'},
      {name: '--positive-bg_base_hover', value: '#f2f3f5'},
      {name: '--positive-bg_base_active', value: '#e3fafd'},
      {name: '--positive-bg_accent', value: '#22daf4'},
      {name: '--positive-bg_accent_hover', value: '#1fb8ce'},
      {name: '--positive-bg_accent_active', value: '#1c97a8'},
      {name: '--positive-bg_tint', value: '#e3fafd'},
      {name: '--positive-icon_default', value: '#1fb8ce'},
      {name: '--positive-icon_inverted', value: '#fff'},
      {name: '--positive-border_base', value: '#c7f5fc'},
      {name: '--positive-border_base_hover', value: '#90ecf9'},
      {name: '--positive-border_accent', value: '#22daf4'},
      {name: '--positive-border_accent_inverted', value: '#fff'},
      {name: '--caution-text_primary', value: '#312c14'},
      {name: '--caution-text_secondary', value: '#967e1c'},
      {name: '--caution-text_tertiary', value: '#fbd024'},
      {name: '--caution-bg_base', value: '#fff'},
      {name: '--caution-bg_base_hover', value: '#fef7da'},
      {name: '--caution-bg_base_active', value: '#fdefb6'},
      {name: '--caution-bg_accent', value: '#b7991e'},
      {name: '--caution-bg_accent_hover', value: '#967e1c'},
      {name: '--caution-bg_accent_active', value: '#746219'},
      {name: '--caution-bg_tint', value: '#fef7da'},
      {name: '--caution-icon_default', value: '#b7991e'},
      {name: '--caution-icon_inverted', value: '#fff'},
      {name: '--caution-border_base', value: '#fdefb6'},
      {name: '--caution-border_base_hover', value: '#fcdf6d'},
      {name: '--caution-border_accent', value: '#b7991e'},
      {name: '--caution-border_accent_inverted', value: '#fff'},
      {name: '--critical-text_primary', value: '#3c1a17'},
      {name: '--critical-text_secondary', value: '#c33529'},
      {name: '--critical-text_tertiary', value: '#f68b82'},
      {name: '--critical-bg_base', value: '#fff'},
      {name: '--critical-bg_base_hover', value: '#fdebea'},
      {name: '--critical-bg_base_active', value: '#fcd8d5'},
      {name: '--critical-bg_accent', value: '#f03e2f'},
      {name: '--critical-bg_accent_hover', value: '#c33529'},
      {name: '--critical-bg_accent_active', value: '#962c23'},
      {name: '--critical-bg_tint', value: '#fdebea'},
      {name: '--critical-icon_default', value: '#f03e2f'},
      {name: '--critical-icon_inverted', value: '#fff'},
      {name: '--critical-border_base', value: '#fcd8d5'},
      {name: '--critical-border_base_hover', value: '#f9b1ab'},
      {name: '--critical-border_accent', value: '#f03e2f'},
      {name: '--critical-border_accent_inverted', value: '#fff'},
    ]

    expect(result).toEqual(expected)
  })
})
