export type CustomTheme = {
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

const theme: CustomTheme = {
  colors: {
    primary: '#FF69B4', // Hot pink
    secondary: '#FFB6C1', // Light pink
    background: '#FFF0F5', // Lavender blush
    text: '#4A4A4A', // Dark gray
    accent: '#FF1493', // Deep pink
    gradient: 'linear-gradient(135deg, #FF69B4 0%, #FFB6C1 100%)',
    pink100: '#FFF0F5', // Lavender blush
    pink200: '#FFE4E1', // Misty rose
    pink300: '#FFB6C1', // Light pink
    pink400: '#FF69B4', // Hot pink
    pink500: '#FF1493', // Deep pink
  },
  fonts: {
    main: "'Montserrat', sans-serif",
    title: "'Quicksand', sans-serif",
  },
}

export default theme
