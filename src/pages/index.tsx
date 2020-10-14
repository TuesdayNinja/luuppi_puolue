import "../styles/global.css"

import Header from "../components/header"
import Logo from "../components/logo"
import Luuppi_puolue from "../components/luuppi_puolue"
import React from "react"
import Vaalit from "../components/vaalit"
import styled from "styled-components"
import tiilitausta from "./images/tiilitausta_pienempi.png"

const Background = styled.div`
  background-image: url(${tiilitausta});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  overflow: scroll;
`

const Padding = styled.div`
  margin: 0 17vw 10vw 17vw;
  @media (max-width: 600px) {
    margin: 0 12vw 10vw 12vw;
  }
  @media (max-width: 470px) {
    margin: 0 8vw 8vw 8vw;
  }
`

export default function Home() {
  return (
    <Background>
      <Header></Header>
      <Logo />
      <Padding>
        <Luuppi_puolue />
        <Vaalit />
      </Padding>
    </Background>
  )
}
