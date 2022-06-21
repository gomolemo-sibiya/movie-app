import styled from "styled-components";

export const Container = styled.div`
    background-color: #1E2D34;
    width: 100%;
    height: 80vh;
`;

export const PopularWrapper = styled.div`
    margin: 0 40px;
`
export const PopularMovies = styled.div`

`

export const MoviesList = styled.ul`
    margin: 0 20px;
    color: #fff;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    list-style: none;

    h1 {
        font-size: 18px;
        font-weight: 350;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Title = styled.div`
   font-size: 30px;
   color: #117360;

   span {
    color: #F7F7F7;
    padding: 0 10px;
   }
`

export const TopButton = styled.div`

`;

export const ButtonStyle = styled.div`
    position: relative;
    float: right;
    margin: 0 5px;

    .btn {
        width: 60px;
        height: 60px;
        cursor: pointer;
        background: transparent;
        border: 1px solid #117360;
        outline: none;
        transition: 1s ease-in-out;
    }
    
    svg {
        position: absolute;
        left: 0;
        top: 0;
        fill: none;
        stroke: #5DC98D;
        stroke-dasharray: 150 480;
        stroke-dashoffset: 150;
        transition: 1s ease-in-out;
    }
    
    .btn:hover {
        transition: 1s ease-in-out;
        background: #117360;
    }
    
    .btn:hover svg {
        stroke-dashoffset: -480;
    }
    
    .btn span {
        color: white;
        font-size: 18px;
        font-weight: 100;
    }
`;