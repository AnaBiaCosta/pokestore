import React, { useState, useEffect } from 'react'
import { 
  Body, 
  Title, 
  InfoContainer, 
  Info, 
  InfoBold,  
  Avatar,
  Button
} from './Card.style'

const Card = ({ name, src, type, price }) => {
  const [newPrice, setNewPrice] = useState(0)
  const [newCapture, setNewCapture] = useState(0)
  const [newGeneration, setNewGeneration] = useState(null)

  useEffect(() => {
    if(price <= 100){
      setNewPrice(10)
    }else if(price > 100 && price <= 200){
      setNewPrice(20)
    }else{
      setNewPrice(50)
    }

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    .then((res) => {
      return res.json()
    }).then((res) => {
      setNewCapture(res.capture_rate)
      setNewGeneration(res.generation.name)
    })
  }, [])

  const transformGeneration = (gen) => {
    return gen.replace(/\w+-i/, "Primeira geração")
  }

  const renderGeneration = () => {
    if(newGeneration){
      return (
        <Info>
          <InfoBold>geração:</InfoBold> {transformGeneration(newGeneration)}
        </Info>
      )
    }
  }

  return (
    <Body>
      <Title>{name}</Title>
      <InfoContainer>
        <div>
          <Info>
            <InfoBold>tipo: </InfoBold>
            {type && type.map((elm) => {
              const { type } = elm
              return (
                <span key={type.name}>{type.name}</span>
              )
            })}
          </Info>

          {renderGeneration()}

          <Info>
            <InfoBold>taxa de captura:</InfoBold> {newCapture}
          </Info>
        </div>
        <Avatar src={src} />
      </InfoContainer>
      <Button>P$ {newPrice}</Button>
    </Body>
  )
}

export { Card }
