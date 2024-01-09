import {RootTheme, ThemeColorCardToneKey, ThemeColorSchemeKey, Theme} from '@sanity/ui/theme'
import {useContext, useMemo} from 'react'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {getScopedTheme} from '../../theme'
import {ThemeContext} from './themeContext'
import {ThemeContextValue} from './types'

/**
 * @public
 */
export interface ThemeProviderProps {
  children?: React.ReactNode
  scheme?: ThemeColorSchemeKey
  theme?: RootTheme
  tone?: ThemeColorCardToneKey
}

/**
 * @public
 */
export function ThemeProvider(props: ThemeProviderProps): React.ReactElement {
  const parentTheme = useContext(ThemeContext)
  const {
    children,
    scheme = parentTheme?.scheme || 'light',
    theme: rootTheme = parentTheme?.theme || null,
    tone = parentTheme?.tone || 'default',
  } = props

  const themeContext: ThemeContextValue | null = useMemo(() => {
    if (!rootTheme) return null

    return {
      version: 0.0,
      theme: rootTheme,
      scheme,
      tone,
    }
  }, [rootTheme, scheme, tone])

  const theme: Theme | null = useMemo(() => {
    if (!rootTheme) return null

    return getScopedTheme(rootTheme, scheme, tone)
  }, [scheme, rootTheme, tone])

  if (!theme) {
    return <pre>ThemeProvider: no "theme" property provided</pre>
  }

  if (!theme.sanity.v2) {
    return <pre>ThemeProvider: no "theme.sanity.v2" property in theme</pre>
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
