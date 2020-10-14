import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import tekija from "./images/tekija_logo.png"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  position: sticky;
  top: 0;
  align-items: center;
`

const Tekija = styled.img`
  height: 15vh;
  width: auto;
  display: block;
`
const Button = styled.button`
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  color: white;
  font-family: Joy Neon;
  font-size: 1.6rem;
  margin-left: 50px;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Tekija src={tekija} alt="" />
      <div>
        <Button onClick={() => scrollTo("#info")}>LUUPPI_PUOLUE</Button>
        <Button onClick={() => scrollTo("#vaalit")}>VAALIT 2020</Button>
      </div>
    </HeaderContainer>
  )
}
