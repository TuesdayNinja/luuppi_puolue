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
`

const GlowImageContainer = styled.div`
  width: 60vw;
  height: auto;
  position: absolute;
  mix-blend-mode: soft-light;
  opacity: 80%;
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

  console.log(logoparts)

  return (
    <LogoContainer>
      <div></div>
      <GlowImageContainer>
        <Backglow
          fluid={logoparts.logoparts.edges[7].node.childImageSharp.fluid}
          alt=""
        />
      </GlowImageContainer>
      <ImageContainer>
        <FlickerArrowU
          fluid={logoparts.logoparts.edges[4].node.childImageSharp.fluid}
          alt=""
        />
      </ImageContainer>

      <GlowImageContainer>
        <Backglow
          fluid={logoparts.logoparts.edges[6].node.childImageSharp.fluid}
          alt=""
        />
      </GlowImageContainer>
      <ImageContainer>
        <FlickerArrowD
          fluid={logoparts.logoparts.edges[5].node.childImageSharp.fluid}
          alt=""
        />
      </ImageContainer>

      <GlowImageContainer>
        <Backglow
          fluid={logoparts.logoparts.edges[2].node.childImageSharp.fluid}
          alt=""
        />
      </GlowImageContainer>
      <ImageContainer>
        <NeonSignText
          fluid={logoparts.logoparts.edges[3].node.childImageSharp.fluid}
          alt=""
        />
      </ImageContainer>

      <GlowImageContainer>
        <Backglow
          fluid={logoparts.logoparts.edges[1].node.childImageSharp.fluid}
          alt=""
        />
      </GlowImageContainer>
      <ImageContainer>
        <NeonSignText
          fluid={logoparts.logoparts.edges[0].node.childImageSharp.fluid}
          alt=""
        />
      </ImageContainer>
    </LogoContainer>
  )
}
