import styled from "styled-components";

export const Background = styled.div`
    display: ${(props) => (props.Show == true ? "flex" : "none")};
    background-color: white;
`

export const Aplicar = styled.button`
    width: 100%;

`;