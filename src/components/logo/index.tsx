import styled, { keyframes } from "styled-components"

import React from "react"
import arrowdowner from "./images/alempi.png"
import arrowupper from "./images/ylempi.png"
import downerglow from "./images/alempitaustaglow.png"
import luuppi from "./images/luuppi.png"
import luuppiglow from "./images/luuppitaustaglow.png"
import puolue from "./images/puolue.png"
import puolueglow from "./images/puoluetaustaglow.png"
import upperglow from "./images/ylempitaustaglow.png"

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
  height: 100%;
  margin-top: -4rem;
`

const NeonSignText = styled.img`
  position: absolute;
  width: 100%;
`

const Backglow = styled.img`
  position: absolute;
  width: 100%;
  mix-blend-mode: soft-light;
  opacity: 70%;
`

const FlickerArrowD = styled(NeonSignText)`
  animation: ${flicker} 6s infinite step-end;
`

const FlickerArrowU = styled(NeonSignText)`
  animation: ${flicker} 5s infinite 3s step-end;
`

export default function Logo() {
  return (
    <LogoContainer>
      <Backglow src={upperglow} alt="" />
      <FlickerArrowU src={arrowupper} alt="" />

      <Backglow src={downerglow} alt="" />
      <FlickerArrowD src={arrowdowner} alt="" />

      <Backglow src={puolueglow} alt="" />
      <NeonSignText src={puolue} alt="" />

      <Backglow src={luuppiglow} alt="" />
      <NeonSignText src={luuppi} alt="" />
    </LogoContainer>
  )
}
