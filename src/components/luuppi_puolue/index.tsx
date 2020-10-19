import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 300;
  font-size: 1.3rem;
  color: white;
  margin-bottom: 10vw;
  margin-top: -1rem;
  @media (max-width: 470px) {
    font-size: 1rem;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ac4499;
  }
`

export default function Luuppi_Puolue() {
  return (
    <Container id="info">
      <p>
        Luuppi_Puolue on poliittisesti sitoutumaton edustajistoryhmä{" "}
        <Link
          href="https://trey.fi/ylioppilaskunta/paatoksenteko"
          target="_blank"
        >
          Treyssä
        </Link>
        . Se kuuluu{" "}
        <Link
          href="https://www.instagram.com/tekijarengas/?hl=fi"
          target="_blank"
        >
          Tekijä-vaalirenkaseen
        </Link>
        , joka koostuu pääsääntöisesti teknillisisten ja samanhenkisten alojen
        vaaliliitoista. Luuppi_Puolueen ehdokkaita yhdistää luuppilaisuus sekä
        halu ajaa järjestöjen etua ylioppilaskunnan edustajistossa.
      </p>
    </Container>
  )
}
