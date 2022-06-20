import styled from "styled-components";

export const Container = styled.div`
margin-top: 80px;
`;

export const Wrapper = styled.div`
display: flex;
  height: 900px;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AsideRight = styled.div`
width: 70%;
display: flex;
flex-direction: column;
gap: 25px;

@media (max-width: 980px) {
  justify-content: center;
  align-items: center;
  width: 100%;
}
`;