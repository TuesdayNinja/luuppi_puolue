import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 65vw;
  margin: 0 auto;
  padding: 2rem;
  /* background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  font-weight: 300;
  font-size: 1.3rem;
  color: white;
  margin-bottom: 5rem;
`
const Headline = styled.h1`
  color: #e8fffc;
  font-family: "Joy Neon Hollow";
  font-size: 4.5rem;
  text-shadow: 0.1vw 0vw 0vw rgba(193, 255, 247, 0.5),
    0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
    0.2vw 0vw 0.1vw rgba(63, 228, 206, 0.5), 0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5),
    0.1vw 0vw 2vw rgba(63, 228, 206, 0.5), 0.4vw 0vw 5vw rgba(61, 189, 172, 0.5),
    0.1vw 0vw 5vw rgba(61, 189, 172, 0.5);
`

const TextPink = styled.h2`
  color: #f49bc2;
  font-family: "Joy Neon";
  text-shadow: 0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
    0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5), 0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
    0.1vw 0vw 2vw rgba(216, 79, 191, 0.5), 0.4vw 0vw 5vw rgba(172, 68, 153, 0.5),
    0.1vw 0vw 5vw rgba(172, 68, 153, 0.5);
`

const TextBlue = styled.h2`
  color: #9ad9e3;
  font-family: "Joy Neon";
  text-shadow: 0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
    0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5), 0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
    0.1vw 0vw 2vw rgba(63, 228, 206, 0.5), 0.4vw 0vw 5vw rgba(61, 189, 172, 0.5),
    0.1vw 0vw 5vw rgba(61, 189, 172, 0.5);
`

export default function Vaalit() {
  return (
    <Container>
      <Headline>Edustajisto vaalit 2020</Headline>
      <TextBlue>Yhtenäisempi ja yhdenvertaisempi ylioppilaskunta 2020</TextBlue>
      <TextPink>Opiskelijalähtöisempää tilapolitiikkaa</TextPink>
      <TextBlue>Järjestöt ylioppilaskunnan keskiöön</TextBlue>
      <TextPink>Poliittisesti sitoutumattomampi ylioppilaskunta</TextPink>
    </Container>
  )
}
