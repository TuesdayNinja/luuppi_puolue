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

export default function Home() {
  return (
    <Background>
      <Header></Header>
      <Logo />
      <Luuppi_puolue />
      <Vaalit />
    </Background>
  )
}
