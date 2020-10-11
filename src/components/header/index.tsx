import React from "react"
import styled from "styled-components"
import tekija from "./images/tekija_logo.png"

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  padding: 2rem;
`

const Tekija = styled.img`
  width: 10vw;
`

export default function Home() {
  return (
    <HeaderContainer>
      <Tekija src={tekija} alt="" />
      <div></div>
    </HeaderContainer>
  )
}
