import { useContext } from "react";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { SideBasket } from "../components/SideBasket/SideBasket";
import BasketContext from "../context/BasketContext";

export function Home() {
  const { items, setQuantity, addItem } = useContext(BasketContext);
  return (
    <HomeContainer>
      <TopRowContainer>
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
      </TopRowContainer>
    </HomeContainer>
  );
}
const HomeContainer = styled.div``;
const TopRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 700px;
  background-color: whitesmoke;
`;
