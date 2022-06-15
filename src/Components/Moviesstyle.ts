import styled from "styled-components";

export const Container = styled.div`
    background-color: #CBCBCB;
    width: 100%;
    height: 100vh;
`;

export const PopularWrapper = styled.div`
    
`
export const PopularMovies = styled.div`

`

export const MoviesList = styled.ul`
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    gap: 200px;
    -webkit-overflow-scrolling: touch;
    list-style: none;
    padding: 20px;
    cursor: pointer;
    ::-webkit-scrollbar {
        background: transparent;
    }
`

export const Title = styled.div`
   
`

export const SideButtons = styled.div`
    
`;

export const TopButton = styled.div`

`;