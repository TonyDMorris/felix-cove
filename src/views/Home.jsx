import { useContext } from "react";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { SideBasket } from "../components/SideBasket/SideBasket";
import BasketContext from "../context/BasketContext";

export function Home() {
  const { items, setQuantity, addItem } = useContext(BasketContext);
  return (
    <HomeContainer>
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
      <Header />
      <SideBasket />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;
