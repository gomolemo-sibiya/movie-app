import styled from "styled-components";

export const Container = styled.div`
    height: 490px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.buttonBackgroundColor};
        border-radius: 15px;
    }

    ::-webkit-scrollbar {
        height: 15px;
        background: transparent;
    }

    @media (max-width: 560px) {
        ::-webkit-scrollbar-thumb {
          background: none;
        }
    }
`;

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 25.5px 0 0 0;
  list-style: none;
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.buttonBackgroundColor};
    border-radius: 15px;
  }

  
`;

export const Item = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 5px 20px;
    align-items: center;
    color: #F7F7F7;

    img {
        border-radius: 50%;
        width: 50px;
        height: 60px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        font-weight: 450;
        font-size: 16px;
        padding: 0 10px;
    }

    @media (max-width: 875px) {
        min-width: 180px;
    }
`;