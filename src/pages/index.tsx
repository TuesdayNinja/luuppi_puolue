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
      <Logo
        arrowupper={data.arrowupper.childImageSharp.fluid}
        upperglow={data.upperglow.childImageSharp.fluid}
        downerglow={data.downerglow.childImageSharp.fluid}
        arrowdowner={data.arrowdowner.childImageSharp.fluid}
        puolueglow={data.puolueglow.childImageSharp.fluid}
        puolue={data.puolue.childImageSharp.fluid}
        luuppi={data.luuppi.childImageSharp.fluid}
        luuppiglow={data.luuppiglow.childImageSharp.fluid}
      />
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
    arrowdowner: file(relativePath: { eq: "alempi.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    arrowupper: file(relativePath: { eq: "ylempi.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    arrowdowner: file(relativePath: { eq: "alempi.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    downerglow: file(relativePath: { eq: "alempitaustaglow.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    upperglow: file(relativePath: { eq: "ylempitaustaglow.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    luuppi: file(relativePath: { eq: "luuppi.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    luuppiglow: file(relativePath: { eq: "luuppitaustaglow.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    puolue: file(relativePath: { eq: "puolue.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    puolueglow: file(relativePath: { eq: "puoluetaustaglow.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
