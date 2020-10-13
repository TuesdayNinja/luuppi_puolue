import React from "react"
import styled from "styled-components"
import tekija from "./images/tekija_logo.png"

const HeaderContainer = styled.div`
  display: flex;
  padding: 2rem;
`

const Tekija = styled.img`
  height: 15vh;
  width: auto;
  display: block;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Tekija src={tekija} alt="" />
      <div></div>
    </HeaderContainer>
  )
}
