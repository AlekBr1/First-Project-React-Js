import React, { useEffect, useState } from 'react'
import { CardFooter, CardIncon, DescCard, DivCards, ImageCards, Seta, TitleCard } from './CardModule'
import selectImg from "../../Images/selectImg.jpg"
import ImageofCard from "../../Images/ReactjsCard.jpg"
import SelectCardImg from '../Modals/CardSelectImg'
import img1 from "../../Images/img1.jpg"
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.jpg"



const Card = (props) => {
  const [Show, setShow] = useState(false);
  const [Selected, setSelected] = useState("");

  useEffect(() => {
    console.log("Storepage, Selected -> ", Selected)
  }, [Selected]);

  return (
    <DivCards>
      <TitleCard>{props.titulo ? props.titulo : "Titulo do card"}</TitleCard>
      {/* <ImageCards onClick={() => console.log("clicou")} wdt={!!props.wdt == true? props.wdt : "200px"} alt="Img do card" src={!!props.img == true ? props.img : ImageofCard} /> */}
      <ImageCards onClick={() => setShow(true)} wdt={!!props.wdt == true ? props.wdt : "200px"} alt="Img do card" src={Selected == "" ? ImageofCard : Selected == "1" ? img1 : Selected == "2" ? img2 : img3} />
      <DescCard>{props.descricao ? props.descricao : "Descricao do card"}</DescCard>
      <CardFooter>
        <CardIncon>
        </CardIncon>
        <Seta>Detalhes</Seta>
        <SelectCardImg Show={Show} setShow={setShow} setSelected={setSelected} />
      </CardFooter>
    </DivCards>
  )
}


export default Card