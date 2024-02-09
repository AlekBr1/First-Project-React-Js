import styled from "styled-components";

export const NavbarBorder = styled.div`
display: flex;
width:100%;
height:10vh;
background-color: rgb(59, 70, 82, 0.60); 
border-bottom:2px solid black;
overflow:hidden;

@media(max-width: 770px){
display: flex;
width:100%;
height:10vh;
background-color: rgb(59, 70, 82, 0.60); 
border-bottom:2px solid black;
overflow:hidden;

}
`;

export const ConteinerLogo = styled.div`
display: flex;
width:5%;
height:50%;
margin: 1% 0 5px 5px;

@media(max-width:1200px){
display: flex;
width:5%;
height:30%;
margin-top: 4%;

@media(max-width:770px){
display: flex;
width:15%;
height:30%;
margin: 7% 5% 5% 5px;
}
`

export const ImageLogo = styled.img`
display:flex;
height:100%;
width:100%;
border-radius: 30px;
opacity: 90%;
`

export const Menu = styled.div`
display: flex;
width:30%;
height:100%;
align-items:center;
margin: 0 5% 0 30%;
justify-content: space-between;

@media(max-width: 1200px){
display: flex;
width:50%;
height:100%;
align-items:center;
justify-content: center;
margin-left: 10%;
justify-content: space-between;
}

@media(max-width: 700px){
display: none;
width:10%;
height:100%;
align-items:center;
margin: 0 auto;
justify-content: space-between;

}
`
export const Button = styled.button`
background-color: grey;
color: white;
height:5vh;
width:30%;
font-size: larger;
cursor:pointer;
border-radius: 10px;
transition: all 0.4s;

&:hover{
    background-color: white;
    color: black;
    transform: scale(1.10);
}

`