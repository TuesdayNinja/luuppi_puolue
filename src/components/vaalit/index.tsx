import { ArrowIosDownward, ArrowIosUpward } from "@styled-icons/evaicons-solid/"
import React, { useState } from "react"

import { Collapse } from "react-collapse"
import Juliste from "../juliste"
import styled from "styled-components"

const Container = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
  color: white;
`

const ThemeContainer = styled(Container)`
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 470px) {
    font-size: 1rem;
  }
`

const ArrowDownBlue = styled(ArrowIosDownward)`
  color: #9ad9e3;
`
const ArrowDownPink = styled(ArrowIosDownward)`
  color: #f49bc2;
`
const ArrowUpBlue = styled(ArrowIosUpward)`
  color: #9ad9e3;
`
const ArrowUpPink = styled(ArrowIosUpward)`
  color: #f49bc2;
`

const Headline = styled.h1`
  color: #e8fffc;
  font-size: 4.5rem;
  text-shadow: 0.1vw 0vw 0vw rgba(193, 255, 247, 0.5),
    0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
    0.2vw 0vw 0.1vw rgba(63, 228, 206, 0.5), 0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5),
    0.1vw 0vw 2vw rgba(63, 228, 206, 0.5), 0.4vw 0vw 5vw rgba(61, 189, 172, 0.5),
    0.1vw 0vw 5vw rgba(61, 189, 172, 0.5);
  @media (max-width: 800px) {
    font-size: 3.5rem;
  }
  @media (max-width: 700px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

const HeadlineMobile = styled.h1`
  color: #e8fffc;
  font-size: 3rem;
  text-shadow: 0.1vw 0vw 0vw rgba(193, 255, 247, 0.5),
    0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
    0.2vw 0vw 0.1vw rgba(63, 228, 206, 0.5), 0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5),
    0.1vw 0vw 2vw rgba(63, 228, 206, 0.5), 0.4vw 0vw 5vw rgba(61, 189, 172, 0.5),
    0.1vw 0vw 5vw rgba(61, 189, 172, 0.5);
  @media (min-width: 601px) {
    display: none;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`

const TextPink = styled.h2`
  color: #f49bc2;
  cursor: pointer;
  text-shadow: 0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
    0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5), 0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
    0.1vw 0vw 2vw rgba(216, 79, 191, 0.5), 0.4vw 0vw 5vw rgba(172, 68, 153, 0.5),
    0.1vw 0vw 5vw rgba(172, 68, 153, 0.5);
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const TextBlue = styled.h2`
  color: #9ad9e3;
  cursor: pointer;
  text-shadow: 0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
    0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5), 0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
    0.1vw 0vw 2vw rgba(63, 228, 206, 0.5), 0.4vw 0vw 5vw rgba(61, 189, 172, 0.5),
    0.1vw 0vw 5vw rgba(61, 189, 172, 0.5);
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const ThemeHeadlineContainerBlue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover ${ArrowDownBlue} {
    color: #f49bc2;
  }
  &:hover ${ArrowUpBlue} {
    color: #f49bc2;
  }
  &:hover ${TextBlue} {
    color: #f49bc2;
    text-shadow: 0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
      0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5),
      0.1vw 0vw 0.1vw rgba(216, 79, 191, 0.5),
      0.1vw 0vw 2vw rgba(216, 79, 191, 0.5),
      0.4vw 0vw 5vw rgba(172, 68, 153, 0.5),
      0.1vw 0vw 5vw rgba(172, 68, 153, 0.5);
  }
`

const ThemeHeadlineContainerPink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover ${ArrowDownPink} {
    color: #9ad9e3;
  }
  &:hover ${ArrowUpPink} {
    color: #9ad9e3;
  }
  &:hover ${TextPink} {
    color: #9ad9e3;
    text-shadow: 0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
      0.1vw 0vw 0.2vw rgba(0, 0, 0, 0.5),
      0.1vw 0vw 0.1vw rgba(63, 228, 206, 0.5),
      0.1vw 0vw 2vw rgba(63, 228, 206, 0.5),
      0.4vw 0vw 5vw rgba(61, 189, 172, 0.5),
      0.1vw 0vw 5vw rgba(61, 189, 172, 0.5);
  }
`

export default function Vaalit() {
  const [themeShown, setThemeShown] = useState([false, false, false])

  function handleThemeClick(point: number) {
    let newArray = themeShown.concat()
    themeShown[point] ? (newArray[point] = false) : (newArray[point] = true)
    setThemeShown(newArray)
  }

  return (
    <Container id="vaalit">
      <Headline>Edustajistovaalit 2020</Headline>
      <HeadlineMobile>
        Edustajisto-
        <br />
        vaalit 2020
      </HeadlineMobile>
      <ThemeHeadlineContainerBlue onClick={() => handleThemeClick(0)}>
        <TextBlue>
          Yhtenäisempi ja yhdenvertaisempi ylioppilaskunta 2020
        </TextBlue>
        {themeShown[0] ? (
          <ArrowUpBlue height="3rem" />
        ) : (
          <ArrowDownBlue height="3rem" />
        )}
      </ThemeHeadlineContainerBlue>
      <Collapse isOpened={themeShown[0]}>
        <ThemeContainer>
          Luuppi_Puolueelle on tärkeää, että kaikki kokevat olonsa turvalliseksi
          ja mukavaksi Tampereen yliopistossa. Siksi meistä on tärkeää olla
          mukana luomassa yliopistoyhteisöä, jonka keskuuteen kaikki ovat
          tervetulleita ja jossa heidän hyvinvoinnista huolehditaan.
          Ylioppilaskunnan tehtävänä on olla siltana eri kampusten välillä ja
          tuoda niitä tehokkaammin yhteen.
        </ThemeContainer>
      </Collapse>
      <ThemeHeadlineContainerPink onClick={() => handleThemeClick(1)}>
        <TextPink>Opiskelijalähtöisempää tilapolitiikkaa</TextPink>
        {themeShown[1] ? (
          <ArrowUpPink height="3rem" />
        ) : (
          <ArrowDownPink height="3rem" />
        )}
      </ThemeHeadlineContainerPink>
      <Collapse isOpened={themeShown[1]}>
        <ThemeContainer>
          Keskusta kampuksen tilapolitiikka on historiallisesti ollut melko
          opiskelijavastaista. Tämän vuoksi ylioppilaskunnan tulisi ajaa
          yliopisto suuntaan, jossa myös keskustakampukselle saataisiin paremmin
          opiskelutiloja ja parempia tiloja aine- ja harrastejärjestöjen
          käyttöön.
        </ThemeContainer>
      </Collapse>
      <ThemeHeadlineContainerBlue onClick={() => handleThemeClick(2)}>
        <TextBlue>Järjestöt ylioppilaskunnan keskiöön</TextBlue>
        {themeShown[2] ? (
          <ArrowUpBlue height="3rem" />
        ) : (
          <ArrowDownBlue height="3rem" />
        )}
      </ThemeHeadlineContainerBlue>
      <Collapse isOpened={themeShown[2]}>
        <ThemeContainer>
          Ainejärjestöt, killat ja harrastejärjestöt ovat ylioppilaskuntaa
          lähempänä opiskelijoita. Ne voivat järjestää monipuolista ja
          tehokkaasti järjestettävää toimintaa kaikille. Ainejärjestöt ja killat
          vastaavat myös tehokkaasti omien alojensa edunvalvontatyöstä. Tämän
          vuoksi onkin hyvin keskeistä, että ylioppilaskunta osallistuu
          varmistamaan tätä toimintaa tukemalla järjestöjä.
        </ThemeContainer>
      </Collapse>
      <TextPink>Poliittisesti sitoutumattomampi ylioppilaskunta</TextPink>
      <Juliste />
    </Container>
  )
}
