import "../styles/global.css"

import Header from "../components/header"
import Logo from "../components/logo"
import React from "react"
import styled from "styled-components"
import tiilitausta from "./images/tiilitausta.png"

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
      <Header />
      <Logo />
    </Background>
  )
}
