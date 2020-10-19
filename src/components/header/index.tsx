import { Close, Menu } from "@styled-icons/evaicons-solid/"
import React, { useState } from "react"

import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  position: fixed;
  top: 0;
  width: calc(100vw - 6rem);
  align-items: center;
  z-index: 100000;
`

const Tekija = styled(Img)`
  width: 10vw;
  height: 9vw;
  display: block;
  @media (max-width: 750px) {
    display: none;
  }
`
const TekijaMobile = styled(Img)`
  width: 36vw;
  height: 30vw;
  display: block;
  @media (min-width: 751px) {
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
  position: fixed;
  align-items: flex-end;
  top: 0;
  width: calc(100vw - 6rem);
  z-index: 100000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`

export default function Header({ tekija }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenuClick(target: string) {
    scrollTo(target)
    setMenuOpen(false)
  }

  return menuOpen ? (
    <MobileMenuModal>
      <StyledClose height="3rem" onClick={() => setMenuOpen(false)} />
      <Button onClick={() => handleMenuClick("#info")}>LUUPPI_PUOLUE</Button>
      <Button onClick={() => handleMenuClick("#vaalit")}>VAALIT 2020</Button>
      <a href="https://www.instagram.com/tekijarengas/?hl=fi" target="_blank">
        <TekijaMobile fluid={tekija} alt="Tekijä logo" />
      </a>
    </MobileMenuModal>
  ) : (
    <HeaderContainer>
      <a href="https://www.instagram.com/tekijarengas/?hl=fi" target="_blank">
        <Tekija fluid={tekija} alt="Tekijä logo" />
      </a>
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
