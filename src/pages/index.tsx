import "../styles/global.css"

import { graphql, withPrefix } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Header from "../components/header"
import Logo from "../components/logo"
import Luuppi_puolue from "../components/luuppi_puolue"
import React from "react"
import Vaalit from "../components/vaalit"
import styled from "styled-components"
import tiilitausta from "../images/tiilitausta_pienempi.png"

require("../fonts/fonts.css")

const Background = styled(BackgroundImage)`
  overflow: scroll;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important, object-position: 0% 0% !important";
  }
`

const OldBackground = styled.div`
  position: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-image: url(${tiilitausta});
  overflow: scroll;
`
const StyledLogo = styled.div`
  margin-top: 20vh;
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
    <div>
      <Header tekija={data.tekija.childImageSharp.fluid}></Header>
      <OldBackground>
        <div />
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <Padding>
          <Luuppi_puolue />
          <Vaalit />
        </Padding>
      </OldBackground>
    </div>
  ) : (
    <div></div>
  )
}

export const query = graphql`
  query {
    tiilitaustaGatsby: file(relativePath: { eq: "tiilitausta_pienempi.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tekija: file(relativePath: { eq: "tekija_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
