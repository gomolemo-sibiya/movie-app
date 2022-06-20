import styled from "styled-components";

export const Container = styled.div`
  background-color: #171C22;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 120px 40px;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 20px;

  @media (max-width: 980px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Top = styled.div`
  font-size: 24px;
  color: #117360;
  font-weight: 400;
  
  span {
    color: #F7F7F7;
    padding: 0 10px;
  }
`;