import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import people from "./people.json"
import styled from "styled-components"

const Container = styled.div`
  margin: 5rem 0;
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
  height: 330px;
  padding: 30px;
  position: relative;
`

const Image = styled(Img)`
  width: 190px;
  height: 250px;
`
const Number = styled(Img)`
  width: 65px;
  height: auto;
  position: absolute;
`
const NumberWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`

const Name = styled.h3`
  font-weight: 300;
  margin: 5px 0 0 0;
  font-size: 1.3rem;
`
const Major = styled.p`
  margin: 2px 0 5px 0;
  font-size: 0.9rem;
  font-weight: 400;
`

const Quote = styled.p`
  margin: 0;
  opacity: 90%;
  font-size: 0.9rem;
`

function Cards({ peopledata }) {
  return people.map(person => {
    const img = peopledata.peopleImages.edges.find(
      imageperson => imageperson.node.relativePath === person.image
    )
    const number = peopledata.numbers.edges.find(
      imageperson => imageperson.node.relativePath === `${person.number}.png`
    )

    return (
      <CardContainer key={person.number}>
        <NumberWrapper>
          {number ? (
            <Number fluid={number.node.childImageSharp.fluid} />
          ) : (
            <div></div>
          )}
        </NumberWrapper>
        {img ? <Image fluid={img.node.childImageSharp.fluid} /> : <div></div>}

        <Name>{person.name}</Name>
        <Major>{person.major}</Major>
        <Quote>{person.quote}</Quote>
      </CardContainer>
    )
  })
}

export default function Luuppi_Puolue() {
  const peopledata = useStaticQuery(graphql`
    query {
      peopleImages: allFile(filter: { sourceInstanceName: { eq: "people" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      numbers: allFile(filter: { sourceInstanceName: { eq: "numbers" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 65) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Cards peopledata={peopledata} />
    </Container>
  )
}
