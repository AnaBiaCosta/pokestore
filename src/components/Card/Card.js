import React from 'react'
import { 
  Body, 
  Title, 
  InfoContainer, 
  Info, 
  InfoBold,  
  Avatar,
  Button
} from './Card.style'

const Card = () => {
  return (
    <Body>
      <Title>pokemon</Title>
      <InfoContainer>
        <div>
          <Info>
            <InfoBold>tipo: </InfoBold> undefined
          </Info>
          <Info>
            <InfoBold>tipo: </InfoBold> undefined
          </Info>
          <Info>
            <InfoBold>tipo: </InfoBold> undefined
          </Info>
        </div>
        <Avatar />
      </InfoContainer>
      <Button>P$ 200</Button>
    </Body>
  )
}

export { Card }
