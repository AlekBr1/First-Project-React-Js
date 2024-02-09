import styled from 'styled-components'


export const DivCards = styled.section`
    width: 300px;
    height: 300px;
    background-color: soft-white;
    color: gray;
    border-radius: 8px;
    box-shadow: 5px 5px 10px 10px #22222270;
    padding: 20px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    transition: width 0.3s, height 0.3s, margin-left 0.3s, margin-top 0.3s;


    @media(max-width: 480px){
       width: 200px;
       height: 300px;
       margin-left: 4.5rem;
       margin-top: 1rem;
       transition: width 0.3s, height 0.3s, margin-left 0.3s, margin-top 0.3s;
    }
`;

export const TitleCard = styled.h3`
    color: rgb(110, 232, 160);
    font-weight: 900;
`;

export const ImageCards = styled.img`
    width: ${(props) => (props.wdt)};
    height: 150px;
    align-items:center;
    justify-content: space-between;
`;

export const DescCard = styled.p`
`;

export const CardFooter = styled.div`
`;

export const CardIncon = styled.div`
`;

export const Seta = styled.button`
    width: 100%;

`;
