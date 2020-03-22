import React from 'react'
import { Body, Nav, List, ListItem } from './Navbar.style'

const Navbar = () => {
  const navItens = [{'text':'comprar'}, {'text':'perfil'}, {'text':'carrinho'}]

  const renderNavItens = () => (
    navItens.map((elm) => (
      <ListItem key={elm.text}>{elm.text}</ListItem>
    ))
  )

  return (
  <Body>
    <img src='./img/nav-brand.png' />
      <Nav>
        <List>
          {renderNavItens()}
        </List>
      </Nav>
  </Body>
  )
}

export { Navbar }
