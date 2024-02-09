import styled from 'styled-components'

export const SectionCards = styled.section`
    @media(min-width: 1441px){
    display: grid;
    grid-template-columns: 400px 400px 400px 400px;
    flex-direction:row;
    align-items:center;
    justify-content: center;
    gap: 20px;
    overflow:hidden;

    }
    @media(max-width: 1670px){
        display: grid;
        grid-template-columns: 400px 400px 400px ;
        flex-direction:row;
        align-items:center;
        justify-content: center;
        gap: 20px;
        transition: justify-content 0.5s, margin-left 0.5s , gap 0.5s;

    }
    @media(max-width: 1280px){
        display: grid;
        grid-template-columns: 400px 400px  ;
        flex-direction:row;
        align-items:center;
        justify-content: center;
        gap: 20px;
        overflow-x:hidden;
        margin-left: 10%;
        transition: justify-content 0.5s, margin-left 0.5s , gap 0.5s;
    }
    @media(max-width: 890px){
        display: grid;
        grid-template-columns: 400px   ;
        flex-direction:row;
        align-items:center;
        justify-content: center;
        gap: 2rem;
        overflow-x:hidden;
        margin-top: 3%;
        margin-left: 10%;
        transition: justify-content 0.5s, margin-left 0.5s , gap 0.5s;
    }
`;

