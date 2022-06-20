import styled from "styled-components";

export const Container = styled.div`
    background-color: #E2E2E2;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const InfoContainer = styled.div`
    width: 30%;
    left: 50px;
    bottom: 170px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    .desc {
        margin: 20px 0px;
    }

    @media (max-width: 658px) {
        width: 80%;
        font-size: 18;
    }

    @media (max-width: 458px) {
        width: 80%;
        font-size: 14;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size= 'cover'
    background-position='center center';
`

export const Overlay = styled.div`
    width: 100%;    
    height: 100%;
    position: absolute;
    bottom: 0;
    /* background: rgba(0, 0, 0, 0.5);  Black see-through */
    background-image: linear-gradient(to bottom, rgba(153, 238, 255, 0.09), rgb(30, 45, 52));
    color: #f1f1f1;
    transition: .5s ease;
    opacity:1;
    color: white;
    font-size: 20px;
    text-align: center;
    z-index: 1
`


export const ButtonContainer = styled.div`
    display: flex;
`


export const IconContainer = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    background-color: yellow;
    z-index: 5;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    top: 90;
`;



export const StyledButton = styled.button`
    box-shadow: 1px 1px 5px 3px #5DC98D;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 800;
    margin-right: 25px;
    cursor: pointer;
    background: #5DC98D;
    color: #F7F7F7;
    span {
        margin-left: 5px;
    }
`

