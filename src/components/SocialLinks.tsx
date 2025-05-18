import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaInstagram, FaTiktok, FaShoppingBag } from 'react-icons/fa'
import type { CustomTheme } from '../theme'

const LinkContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin-top: 2.5rem;
`

const Link = styled(motion.a)`
  background: white;
  color: ${(props) => (props.theme as CustomTheme).colors.text};
  padding: 1.2rem;
  border-radius: 15px;
  text-decoration: none;
  text-align: center;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ff69b4 0%, #ffb6c1 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  &:hover {
    transform: translateY(-5px);
    border-color: #ff69b4;
    color: white;
    box-shadow: 0 8px 30px rgba(255, 105, 180, 0.2);
    &::before {
      opacity: 1;
    }
  }
`

export const SocialLinks: React.FC = () => (
  <LinkContainer
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
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
  </LinkContainer>
)
