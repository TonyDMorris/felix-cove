import { useContext } from "react";
import styled from "styled-components";
import { SideBasket } from "../components/SideBasket/SideBasket";
import BasketContext from "../context/BasketContext";

export function Home() {
  const { items, setItems } = useContext(BasketContext);
  return (
    <HomeContainer>
      <button
        title="click to add item"
        onClick={() => {
          setItems((prevItems) => {
            return [
              ...prevItems,
              {
                id: Math.random(),
                name: "tony",
                description: "this is desc",
                qty: 1,
              },
            ];
          });
        }}
      >
        press to add item
      </button>
      <SideBasket />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;
