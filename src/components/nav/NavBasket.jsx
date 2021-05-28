import styled from "styled-components";
import basketImage from "../../assets/basket.png";
export function NavBasket() {
  return <BasketIcon image={basketImage}></BasketIcon>;
}

const BasketIcon = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: 45px 50px;
  width: 50px;
  height: 100%;
`;
