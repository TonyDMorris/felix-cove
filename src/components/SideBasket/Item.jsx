import { useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";

export function Item({ id, name, description, qty }) {
  const { setQuantity } = useContext(BasketContext);
  return (
    <Container id={id}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{qty}</div>
      <button onClick={() => setQuantity(id, qty + 1)}>+</button>
      <button onClick={() => setQuantity(id, qty - 1)}>-</button>
      <button onClick={() => setQuantity(id, 0)}>X</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 1px;
  width: 100%;
  height: 75px;
  background-color: yellow;
`;
