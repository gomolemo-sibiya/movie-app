import styled from "styled-components";

export const NavWrapper = styled.div`
    background-color: #1f282f;
    width: 100%;
    height: 70px;
    padding: 0 40px;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 3;
    
    @media (max-width: 858px) {
        padding: 0 20px;
    }

    @media (max-width: 458px) {
        padding: 0 20px;
    }
`;

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    padding: 0 0 0 5px;

    li {
        list-style: none;
        padding: 0 0 0 5px; 
    }

    li a {
        color: #fff;
        font-size: 18px;
        text-decoration: none;
    }

    li a:hover {
        color: #ff3d00;
    }
`;

export const Logo = styled.div`

`;