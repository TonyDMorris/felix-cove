import styled from "styled-components";
import image from "../../assets/hc-duck-pond.jpg";
export function Offer() {
  return (
    <Background>
      <Container>
        <TopRow>Felix Cove</TopRow>
        <OfferContainer>
          <OfferBox></OfferBox>
          <OfferBox></OfferBox>
          <OfferBox></OfferBox>
        </OfferContainer>
      </Container>
    </Background>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: solid 2px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
`;
const Background = styled.div`
  flex-grow: 1;
  background-image: url(${image});
  border: solid 2px black;
`;

const TopRow = styled.div`
  text-align: center;
  font-size: 5vw;
  font-family: BreeSerifRegular;
  color: whitesmoke;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
`;

const OfferContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  flex-wrap: wrap;
`;

const OfferBox = styled.div`
  width: 15vw;
  height: 15vw;
  min-width: 200px;
  min-height: 200px;
  background-color: blue;
`;
