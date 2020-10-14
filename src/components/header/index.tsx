import { Close, Menu } from "@styled-icons/evaicons-solid/"
import React, { useState } from "react"

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
  @media (max-width: 750px) {
    flex-direction: row-reverse;
  }
`

const Tekija = styled.img`
  width: 10vw;
  height: 9vw;
  display: block;
  @media (max-width: 750px) {
    display: none;
  }
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
  @media (max-width: 750px) {
    margin: 1rem 0;
  }
`

const StyledMenu = styled(Menu)`
  color: white;
  @media (min-width: 751px) {
    display: none;
  }
`
const StyledClose = styled(Close)`
  color: white;
  margin-bottom: 0.5rem;
  @media (min-width: 751px) {
    display: none;
  }
`

const DesktopMenu = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`
const MobileMenu = styled.div`
  @media (min-width: 751px) {
    display: none;
  }
`
const MobileMenuModal = styled.div`
  background-color: black;
  position: sticky;
  align-items: flex-end;
  top: 0;
  z-index: 100000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return menuOpen ? (
    <MobileMenuModal>
      <StyledClose height="3rem" onClick={() => setMenuOpen(false)} />
      <Button onClick={() => scrollTo("#info")}>LUUPPI_PUOLUE</Button>
      <Button onClick={() => scrollTo("#vaalit")}>VAALIT 2020</Button>
    </MobileMenuModal>
  ) : (
    <HeaderContainer>
      <Tekija src={tekija} alt="" />
      <MobileMenu>
        <StyledMenu height="3rem" onClick={() => setMenuOpen(true)} />
      </MobileMenu>
      <DesktopMenu>
        <Button onClick={() => scrollTo("#info")}>LUUPPI_PUOLUE</Button>
        <Button onClick={() => scrollTo("#vaalit")}>VAALIT 2020</Button>
      </DesktopMenu>
    </HeaderContainer>
  )
}
