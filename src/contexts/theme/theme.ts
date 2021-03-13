import { createContext } from 'react'

export type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export const setThemeContext = (themeContext: ThemeContextType, theme: string): void => {
  themeContext.setTheme(theme)
}
