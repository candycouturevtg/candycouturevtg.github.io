import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import type { CustomTheme } from '../theme'

const HeaderWrapper = styled(motion.header)`
  width: 100%;
  max-width: 900px;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`

const LogoTitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`

const Logo = styled(motion.img)`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
  transition: all 0.3s ease;
  border: 2px solid #ffe4e1;
  background: #fff;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 10px;
  margin-top: 2.5rem;
  width: 100%;
  min-width: 200px;
  max-width: 500px;
`

const Title = styled(motion.h1)`
  font-family: ${(props) => (props.theme as CustomTheme).fonts.title};
  font-size: 3.5rem;
  font-weight: 700;
  background: ${(props) => (props.theme as CustomTheme).colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
  position: relative;
`

const Underline = styled.div`
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  height: 7px;
  border-radius: 4px;
  background: linear-gradient(90deg, #ff69b4 0%, #ffb6c1 100%);
  margin: 0.5rem 0 0.5rem 0;
`

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #4a4a4a;
  opacity: 0.8;
  margin-top: 1.5rem;
  text-align: center;
`

export const Header: React.FC = () => (
  <HeaderWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <LogoTitleRow>
      <Logo
        src="/Madi_logo.avif"
        alt="Logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <TitleWrapper>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Candy Couture Vintage
        </Title>
        <Underline />
      </TitleWrapper>
    </LogoTitleRow>
    <Subtitle
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Curating the finest vintage pieces for your unique style
    </Subtitle>
  </HeaderWrapper>
)
