import styled from "styled-components";
import { SideBasket } from "../components/SideBasket";

export function Home() {
  return (
    <HomeContainer>
      <SideBasket />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;
