import styled from "styled-components";
import { NavBasket } from "./NavBasket";
import { Desktop, Tablet, Mobile, Default } from "../Responsive";
import { useContext } from "react";
import BasketContext from "../../context/BasketContext";
export function Nav() {
  const { items, setQuantity, addItem } = useContext(BasketContext);
  return (
    <NavContainer>
      <Mobile>
        <NavBasket></NavBasket>
      </Mobile>
      <Tablet>
        <NavBasket></NavBasket>
      </Tablet>

      <button
        title="click to add item"
        onClick={() => {
          addItem({
            id: items.length + 1,
            name: "tony",
            description: "this is desc",
          });
        }}
      >
        press to add item
      </button>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: blue;
`;
