import styled from "styled-components";

export const Container = styled.section`
  
`;

export const Wrapper = styled.div`
 
`;

export const Title = styled.div`

`;

export const MovieCard = styled.li`
object-fit: contain;
width: 600px;
margin: 10px;
gap: 20px;


img {
    height: 280px;
    width: 300px;
}

:hover {
    transition: transform 450ms;
    transform: scale(1.09);
}

    @media (max-width: 858px) {
        height: 300px;
        width: 600px;

        img {
            height: 280px;
            width: 300px;
        }
    }

    @media (max-width: 458px) {
        height: 300px;
        width: 600px;

        img {
            height: 280px;
            width: 300px;
        }
    }
`;


export const titleCategory = styled.h1`
  
`;

export const LoadMore = styled.button`
  
`;

export const ButtonsContainer = styled.div`
  
`;
