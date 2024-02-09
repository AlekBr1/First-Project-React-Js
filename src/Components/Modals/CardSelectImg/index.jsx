import React, { Component, useEffect, useState } from 'react'
import { Background, Aplicar } from './style';

const SelectCardImg = ({ Show, setShow, setSelected }) => {
    const [FormValue, setFormValue] = useState("");

    useEffect(() => {
        console.log("mudou valor --> ", FormValue);
        setSelected(FormValue);
    },[FormValue])

    return (
        <Background Show={Show}>
            <form>
                <input type="radio" name="img_select" value="1" onClick={(e) => setFormValue(e.target.value)} />
                <label for="html">1</label>
                <input type="radio" name="img_select" value="2" onClick={(e) => setFormValue(e.target.value)} />
                <label for="css">2</label>
                <input type="radio" name="img_select" value="3" onClick={(e) => setFormValue(e.target.value)} />
                <label for="javascript">3</label>
                <Aplicar>Aplicar</Aplicar>

            </form>
        </Background>
    )
}

export default SelectCardImg;