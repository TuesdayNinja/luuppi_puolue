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
  top: 0;
  left: 0;
  width: 100%;
`

const Backglow = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  mix-blend-mode: soft-light;
  opacity: 80%;
`

const FlickerArrowD = styled(NeonSignText)`
  animation: ${flicker} 6s infinite step-end;
`

const FlickerArrowU = styled(NeonSignText)`
  animation: ${flicker} 5s infinite 3s step-end;
`

export default function Logo({
  arrowupper,
  upperglow,
  downerglow,
  arrowdowner,
  puolueglow,
  puolue,
  luuppi,
  luuppiglow,
}) {
  return (
    <LogoContainer>
      <Backglow fluid={upperglow} alt="" />
      <FlickerArrowU fluid={arrowupper} alt="" />

      <Backglow fluid={downerglow} alt="" />
      <FlickerArrowD fluid={arrowdowner} alt="" />

      <Backglow fluid={puolueglow} alt="" />
      <NeonSignText fluid={puolue} alt="" />

      <Backglow fluid={luuppiglow} alt="" />
      <NeonSignText fluid={luuppi} alt="" />
    </LogoContainer>
  )
}
