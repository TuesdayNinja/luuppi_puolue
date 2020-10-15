import "../styles/global.css"

import BackgroundImage from "gatsby-background-image"
import Header from "../components/header"
import Logo from "../components/logo"
import Luuppi_puolue from "../components/luuppi_puolue"
import React from "react"
import Vaalit from "../components/vaalit"
import { graphql } from "gatsby"
import styled from "styled-components"

const Background = styled(BackgroundImage)`
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

export default function Home({ data }) {
  console.log(data)
  return data.tiilitaustaGatsby ? (
    <Background
      Tag="section"
      fluid={data.tiilitaustaGatsby.childImageSharp.fluid}
    >
      <Header tekija={data.tekija.childImageSharp.fluid}></Header>
      <Logo />
      <Padding>
        <Luuppi_puolue />
        <Vaalit />
      </Padding>
    </Background>
  ) : (
    <div></div>
  )
}

export const query = graphql`
  query {
    tiilitaustaGatsby: file(relativePath: { eq: "tiilitausta_pienempi.png" }) {
      childImageSharp {
        fluid(fit: COVER, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tekija: file(relativePath: { eq: "tekija_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
