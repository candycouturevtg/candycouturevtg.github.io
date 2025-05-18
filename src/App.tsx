import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Header } from './components/Header'
import { FeaturedItems } from './components/FeaturedItems'
import { SocialLinks } from './components/SocialLinks'

type CustomTheme = {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    accent: string
    gradient: string
    pink100: string
    pink200: string
    pink300: string
    pink400: string
    pink500: string
  }
  fonts: {
    main: string
    title: string
  }
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <FeaturedItems />
      <SocialLinks />
    </ThemeProvider>
  )
}

export default App
