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
  height: 325px;
  padding: 30px;
`

const Image = styled(Img)`
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

function Cards({ data }) {
  return people.map(person => {
    const img = data.peopleImages.edges.find(
      imageperson => imageperson.node.relativePath === person.image
    )
    console.log(img)
    return (
      <CardContainer>
        {img ? <Image fluid={img.node.childImageSharp.fluid} /> : <div></div>}

        <Name>{person.name}</Name>
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
              fluid(maxWidth: 300) {
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
      <Cards data={peopledata} />
    </Container>
  )
}
