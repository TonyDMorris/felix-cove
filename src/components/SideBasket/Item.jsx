import styled from "styled-components";

export function Item({ id, name, description, qty }) {
  return (
    <Container id={id}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{qty}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 10px;
  width: 100%;
  height: 20px;
  background-color: yellow;
`;
