import styled from "styled-components";
import image from "../../assets/hc-duck-pond.jpg";
export function Offer() {
  return (
    <Background>
      <Container>
        <TopRow>Felix-Cove</TopRow>
      </Container>
    </Background>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: solid 2px black
  display: flex;
  justify-content: center;
  background-color: rgba(245, 245, 245, 0.2);
`;
const Background = styled.div`
  flex-grow: 1;
  background-image: url(${image});
  border: solid 2px black;
`;

const TopRow = styled.div`
  text-align: center;
  font-size: 5vw;
  font-family: Lobster;
`;
