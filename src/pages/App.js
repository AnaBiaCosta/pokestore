import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import { BuyMenu } from '../components/BuyMenu'
import { PageTitle } from '../components/PageTitle'
import { Wrapper } from '../components/Wrapper'
import { CardWrapper } from '../components/CardWrapper'
import { Card } from '../components/Card'

const App = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
    .then((res) => {
      return res.json()
    }).then((res) => {
      Promise.all(res.results.map(pokemonsObj => {
        return fetch(pokemonsObj.url)
        .then((pokemonsUrl) => pokemonsUrl.json())
      })).then((valuePokemonsUrl) => {
        setPokemon(valuePokemonsUrl)
      })
    })
  }, [])


  return (
    <Layout>
      <Navbar />
      <Main>
        <BuyMenu />
        <Wrapper>
          <PageTitle text='Poke Store'/>
          <CardWrapper>
            {pokemon && pokemon.map(item => (
              <Card
              key={item && item.name}
              name={item && item.name}
              type={item && item.types}
              price={item && item.base_experience}
              src={item && item.sprites.front_default}
              generation={'geração'}
              capture={'captura'}
              />
            ))}
          </CardWrapper>
        </Wrapper>
      </Main>
    </Layout>
  )
}

export { App }
