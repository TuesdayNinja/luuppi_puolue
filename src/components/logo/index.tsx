import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"

import Img from "gatsby-image"
import React from "react"

const flicker = keyframes`
    0% {
      opacity: 1;
    }
    3% {
      opacity: 0.4;
    }
    6% {
      opacity: 1;
    }
    7% {
      opacity: 0.4;
    }
    8% {
      opacity: 1;
    }
    9% {
      opacity: 0.4;
    }
    10% {
      opacity: 1;
    }
    89% {
      opacity: 1;
    }
    90% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.4;
    }`

const LogoContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 60vw;
  height: 60vw;
  margin-top: -4rem;
  @media (max-width: 900px) {
    width: 65vw;
    height: 65vw;
  }
  @media (max-width: 750px) {
    width: 80vw;
    height: 80vw;
  }
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vw;
  }
`

const NeonSignText = styled(Img)`
  position: absolute;
  width: 100%;
`

const Backglow = styled(Img)`
  position: absolute;
  width: 100%;
  mix-blend-mode: soft-light;
  opacity: 70%;
  will-change: opacity;
`

const FlickerArrowD = styled(NeonSignText)`
  animation: ${flicker} 6s infinite step-end;
`

const FlickerArrowU = styled(NeonSignText)`
  animation: ${flicker} 5s infinite 3s step-end;
`
const ImageContainer = styled.div`
  width: 60vw;
  height: auto;
  position: absolute;
  @media (max-width: 900px) {
    width: 65vw;
  }
  @media (max-width: 750px) {
    width: 80vw;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`

export default function Logo() {
  const logoparts = useStaticQuery(graphql`
    query {
      logoparts: allFile(filter: { sourceInstanceName: { eq: "logoparts" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const arrowU = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "ylempi.png"
  )

  const arrowUGlow = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "ylempitaustaglow.png"
  )

  const arrowDGlow = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "alempitaustaglow.png"
  )

  const arrowD = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "alempi.png"
  )

  const luuppi = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "luuppi.png"
  )

  const luuppiGlow = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "luuppitaustaglow.png"
  )

  const puolueGlow = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "puoluetaustaglow.png"
  )

  const puolue = logoparts.logoparts.edges.find(
    part => part.node.relativePath === "puolue.png"
  )

  return (
    <LogoContainer>
      <div></div>
      <ImageContainer>
        <Backglow fluid={arrowUGlow.node.childImageSharp.fluid} alt="" />
      </ImageContainer>
      <ImageContainer>
        <FlickerArrowU fluid={arrowU.node.childImageSharp.fluid} alt="" />
      </ImageContainer>

      <ImageContainer>
        <Backglow fluid={arrowDGlow.node.childImageSharp.fluid} alt="" />
      </ImageContainer>
      <ImageContainer>
        <FlickerArrowD fluid={arrowD.node.childImageSharp.fluid} alt="" />
      </ImageContainer>

      <ImageContainer>
        <Backglow fluid={luuppiGlow.node.childImageSharp.fluid} alt="" />
      </ImageContainer>
      <ImageContainer>
        <NeonSignText fluid={luuppi.node.childImageSharp.fluid} alt="" />
      </ImageContainer>

      <ImageContainer>
        <Backglow fluid={puolueGlow.node.childImageSharp.fluid} alt="" />
      </ImageContainer>
      <ImageContainer>
        <NeonSignText fluid={puolue.node.childImageSharp.fluid} alt="" />
      </ImageContainer>
    </LogoContainer>
  )
}
