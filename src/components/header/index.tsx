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
  @media (max-width: 880px) {
    display: none;
  }
`
const TekijaMobile = styled(Img)`
  width: 36vw;
  height: 30vw;
  display: block;
  @media (min-width: 881px) {
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
  @media (max-width: 880px) {
    margin: 1rem 0;
  }
`

const StyledMenu = styled(Menu)`
  color: white;
  @media (min-width: 881px) {
    display: none;
  }
`
const StyledClose = styled(Close)`
  color: white;
  margin-bottom: 0.5rem;
  @media (min-width: 881px) {
    display: none;
  }
`

const DesktopMenu = styled.div`
  @media (max-width: 880px) {
    display: none;
  }
`
const MobileMenu = styled.div`
  @media (min-width: 881px) {
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

const Aanesta = styled(Button)`
  text-decoration: none;
  display: inline-block;
  padding: 12px 15px 3px 15px;
  color: #f49bc2;
  text-shadow: 0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
    0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5), 0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
    0.1vw 0vw 2vw rgba(216, 79, 191, 0.5), 0.4vw 0vw 5vw rgba(172, 68, 153, 0.5),
    0.1vw 0vw 5vw rgba(172, 68, 153, 0.5);
  @media (max-width: 480px) {
  }
  cursor: pointer;
  :hover {
    color: #9ad9e3;
    border-color: #9ad9e3;
    text-shadow: 0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
      0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5),
      0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
      0.1vw 0vw 2vw rgba(63, 228, 206, 0.5),
      0.4vw 0vw 5vw rgba(61, 189, 172, 0.5),
      0.1vw 0vw 5vw rgba(61, 189, 172, 0.5);
  }
  border: 2px solid #f49bc2;
  border-radius: 10px;
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
      <Button onClick={() => handleMenuClick("#vaalit")}>VAALIT 2022</Button>
      <a href="https://trey.fi/edustajistovaalit/aanesta" target="_blank">
        <Aanesta>ÄÄNESTÄ</Aanesta>
      </a>
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
        <Button onClick={() => scrollTo("#vaalit")}>VAALIT 2022</Button>
        <a href="https://trey.fi/edustajistovaalit/aanesta" target="_blank">
          <Aanesta>ÄÄNESTÄ</Aanesta>
        </a>
      </DesktopMenu>
    </HeaderContainer>
  )
}
