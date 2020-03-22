import React from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import { BuyMenu } from '../components/BuyMenu'
import { PageTitle } from '../components/PageTitle'
import { Wrapper } from '../components/Wrapper'
import { CardWrapper } from '../components/CardWrapper'
import { Card } from '../components/Card'

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Main>
        <BuyMenu />
        <Wrapper>
          <PageTitle text='Poke Store'/>
          <CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardWrapper>
        </Wrapper>
      </Main>
    </Layout>
  )
}

export { App }
