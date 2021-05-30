import { useContext } from "react";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { Offer } from "../components/header/Offer";
import { SideBasket } from "../components/SideBasket/SideBasket";
import BasketContext from "../context/BasketContext";

export function Home() {
  return (
    <HomeContainer>
      <Offer></Offer>
      <Header />
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
  flex-wrap: wrap-reverse;
`;
