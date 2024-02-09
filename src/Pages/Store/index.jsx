import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards'
import { SectionCards, FormCreateCards} from './style'
import img1 from "../../Images/img1.jpg"
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.jpg"

const Store = () => {
  const [AllCards, setAllCards] = useState([]);
  const [Titulo, setTitulo] = useState("");
  const [Descricao, setDescricao] = useState("");

  function AddCard(T, D) {
    let tempCards = [...AllCards];
    tempCards.push({ T, D });
    setAllCards(tempCards);

    setTitulo("");
    setDescricao("");
  }

  useEffect(() => {
    console.log(AllCards)
  }, [AllCards])

  return (
    <SectionCards>
      <Card img={img1} wdt="80%" />
      <Card img={img2} wdt="100%"/>
      <Card img={img3} wdt="100%"/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      {AllCards.map((d) => {
        return (
          <Card key={d} titulo={d.T} descricao={d.D} />
        )
      })}
      <FormCreateCards onSubmit={(e) => {
          e.preventDefault()
          AddCard(Titulo, Descricao)
        }} style={{ display: "Flex", flexDirection: "column" }}>
        <input
          required={true}
          type='text'
          placeholder='Titulo do card'
          value={Titulo}
          onChange={(e) => setTitulo(e.target.value)} />
        <input
          required={true}
          type='text'
          placeholder='Descrição do card'
          value={Descricao}
          onChange={(e) => setDescricao(e.target.value)} />
        <button type='submit'>add</button>
      </FormCreateCards>
    </SectionCards>
  )
}

export default Store