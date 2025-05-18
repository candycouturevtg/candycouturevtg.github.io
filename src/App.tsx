import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaShoppingBag,
} from 'react-icons/fa'

type CustomTheme = {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    accent: string
  }
  fonts: {
    main: string
    title: string
  }
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

const theme: CustomTheme = {
  colors: {
    primary: '#FF69B4', // Hot pink
    secondary: '#00FFFF', // Cyan
    background: '#FFE4E1', // Misty rose
    text: '#4B0082', // Indigo
    accent: '#FFD700', // Gold
  },
  fonts: {
    main: "'Comic Sans MS', cursive",
    title: "'Impact', fantasy",
  },
}

const Container = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.main};
`

const Title = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px ${(props) => props.theme.colors.secondary};
`

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
  object-fit: cover;
`

const LinkContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`

const Link = styled(motion.a)`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 0 ${(props) => props.theme.colors.text};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const Description = styled(motion.p)`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  max-width: 600px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Candy Couture Vintage
        </Title>

        <ProfileImage
          src="/Madi_logo.avif"
          alt="Profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />

        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your one-stop shop for the cutest vintage finds! 🎀✨ Follow me for
          daily drops and exclusive deals!
        </Description>

        <LinkContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="https://whatnot.com/user/candycouturevtg" target="_blank">
            <FaShoppingBag size={24} /> Shop on Whatnot
          </Link>
          <Link href="https://instagram.com/candycouturevtg" target="_blank">
            <FaInstagram size={24} /> Follow on Instagram
          </Link>
          <Link href="https://tiktok.com/@candycouturevtg" target="_blank">
            <FaTiktok size={24} /> Follow on TikTok
          </Link>
          <Link href="https://wa.me/1234567890" target="_blank">
            <FaWhatsapp size={24} /> Contact on WhatsApp
          </Link>
        </LinkContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App
