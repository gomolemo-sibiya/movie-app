import styled from "styled-components";

export const Container = styled.div`
    background-color: #1E2D34;
    width: 100%;
    height: 100vh;
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

export const SideButtons = styled.div`
    
`;

export const TopButton = styled.div`

`;