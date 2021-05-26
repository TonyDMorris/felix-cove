import styled from "styled-components";
import { NavBasket } from "./NavBasket";
import { Desktop, Tablet, Mobile, Default } from "./Responsive";
export function Nav() {
  return (
    <NavContainer>
      <Mobile displayIn={["Laptop"]}>
        <NavBasket></NavBasket>
      </Mobile>
      <Tablet displayIn={["Laptop"]}>
        <NavBasket></NavBasket>
      </Tablet>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: blue;
`;
