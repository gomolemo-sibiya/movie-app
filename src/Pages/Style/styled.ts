import styled from "styled-components";

export const Container = styled.div`
  background-color: #171C22;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 120px 40px;
  justify-content: space-between
`
type Props = {
    backImage: string;
};

export const MovieContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  
`;

export const Left = styled.div<Props>`
  height: 475px;
  width: 375px;
  background-image: url(${(props) => props.backImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px 0 0 20px;
`
export const Right = styled.div`
  height: 475px;
  width: 550px;
  background-color: #1D262D;
  padding: 0 40px;
  text-align: justify;
  text-justify: inter-word;
  border-radius: 25px;
  border-radius:0 20px 20px 0;
  span{
    color: #5DC98D;
  }
  
  h1 {
    color: #F7F7F7
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
    gap: 40px;
  }

  span.overview {
      color: #CCCCCC;
  }
`

export const CastContainer = styled.div`
  height: 475px;
  width: 375px;
  background-color: #1D262D;
  border-radius: 20px
`;