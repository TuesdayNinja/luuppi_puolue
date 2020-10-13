import React from "react"
import jere from "./images/jere.jpg"
import loviisa from "./images/loviisa.jpg"
import mirva from "./images/mirva.jpg"
import paavo from "./images/paavo.jpg"
import people from "./people.json"
import random from "./images/random.png"
import styled from "styled-components"

type personType = {
  person: { number: number; name: string; quote: string; image: string }
}

const Container = styled.div`
  width: 65vw;
  margin: 5rem auto;
  font-weight: 300;
  font-size: 1.3rem;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 30px;
  justify-content: space-around;
`

const CardContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 190px;
  height: 325px;
  padding: 30px;
`

const Image = styled.img`
  width: 190px;
  height: auto;
`
const Name = styled.h3`
  font-weight: 300;
  margin: 5px 0;
  font-size: 1.4rem;
`
const Quote = styled.p`
  margin: 0;
  font-size: 0.9rem;
`

function Card(person: personType) {
  console.log(person.person.image)
  return (
    <CardContainer>
      <Image src={random} alt="" />
      <Name>{person.person.name}</Name>
      <Quote>{person.person.quote}</Quote>
    </CardContainer>
  )
}

function Cards() {
  return people.map(person => {
    return <Card key={person.number} person={person} />
  })
}

export default function Luuppi_Puolue() {
  return (
    <Container>
      <Cards />
    </Container>
  )
}
