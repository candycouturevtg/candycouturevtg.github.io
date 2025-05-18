import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import type { CustomTheme } from '../theme'

const FeaturedSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 3rem auto 0 auto;
  z-index: 1;
`

const FeaturedTitle = styled.h2`
  font-family: ${(props) => (props.theme as CustomTheme).fonts.title};
  font-size: 2rem;
  color: ${(props) => (props.theme as CustomTheme).colors.pink500};
  text-align: center;
  margin-bottom: 1.5rem;
`

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`

const ItemCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.1);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s;
  border: 2px solid #ffe4e1;
  position: relative;
  &:hover {
    box-shadow: 0 8px 30px rgba(255, 105, 180, 0.18);
    border-color: #ff69b4;
  }
`

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: #fff0f5;
`

const ItemName = styled.div`
  font-family: ${(props) => (props.theme as CustomTheme).fonts.main};
  font-weight: 600;
  font-size: 1.1rem;
  color: ${(props) => (props.theme as CustomTheme).colors.text};
  margin-bottom: 0.5rem;
  text-align: center;
`

const ItemPrice = styled.div`
  color: ${(props) => (props.theme as CustomTheme).colors.pink500};
  font-weight: 700;
  font-size: 1rem;
`

const ItemTag = styled.div`
  background: ${(props) => (props.theme as CustomTheme).colors.pink200};
  color: ${(props) => (props.theme as CustomTheme).colors.pink500};
  font-size: 0.85rem;
  border-radius: 8px;
  padding: 0.2rem 0.7rem;
  margin-top: 0.5rem;
  display: inline-block;
`

const ErrorMsg = styled.div`
  color: #ff1493;
  background: #fff0f5;
  border: 1px solid #ffb6c1;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin: 2rem auto;
  max-width: 400px;
`

type Item = {
  id: string
  name: string
  image: string
  price?: string
  tag?: string
}

export const FeaturedItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('/items.json')
        if (!res.ok) throw new Error('Could not fetch featured items.')
        const data = await res.json()
        setItems(data)
      } catch (err) {
        setError('Could not load featured items. Please try again later.')
      }
    }
    fetchItems()
  }, [])

  return (
    <FeaturedSection>
      <FeaturedTitle>Featured Items</FeaturedTitle>
      {error ? (
        <ErrorMsg>{error}</ErrorMsg>
      ) : (
        <ItemsGrid>
          {items.map((item) => (
            <ItemCard key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemName>{item.name}</ItemName>
              {item.price && <ItemPrice>{item.price}</ItemPrice>}
              {item.tag && <ItemTag>{item.tag}</ItemTag>}
            </ItemCard>
          ))}
        </ItemsGrid>
      )}
    </FeaturedSection>
  )
}
