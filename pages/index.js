import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import StyledText from '../components/Text'

export default function HomePage() {
  return (
    <CardWrapper>
      <Card>
        <ImageWrapper>
            <Image
              src={'/pexels.jpg'}
              fill
              alt={'pic'}
            />
        <CardOverlayText>Welcome! My name is Chris</CardOverlayText>
        </ImageWrapper>
      </Card>
    </CardWrapper>
  )
}

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 75%; 
`

const Card = styled.div`
  position: relative;
  width: 65vw;
`

const CardWrapper= styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 75px;
`

const CardOverlayText = styled(StyledText)`
  position: absolute;
  bottom: 0;
  padding: 30px;
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  color: #febd88;
  `