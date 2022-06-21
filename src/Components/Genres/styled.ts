import styled from "styled-components";

export const MovieCard = styled.li`
    object-fit: contain;
    gap: 20px;
    margin: 20px;
    height: auto;
    width: 600px;
    background-color: #1D262D;
    border-radius: 20px;
    

    h1 {
        font-size: 14px;
        padding-left: 10px;
    }

    img {
        height: 280px;
        width: 300px;
        /* top-left | top-right | bottom-right | bottom-left */
        border-radius: 20px 20px 0 0;
    }

    :hover {
        transition: transform 450ms;
        transform: scale(1.09);
    }

    @media (max-width: 858px) {
        width: 230px;
        height: 250px;

        img {
            width: 230px;
            height: 170px;
        }
    }

    @media (max-width: 458px) {
        width: 200px;
        height: 400px;
        
        img {
            width: 200px;
            height: auto;
        }
    }
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