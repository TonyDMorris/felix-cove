import React, { useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";
import { animated, useSpring, Spring } from "react-spring";

import { Desktop } from "../Responsive";
import { Item } from "./Item";
export function SideBasket() {
  const { items, setItems } = useContext(BasketContext);
  const springStyle = useSpring({
    opacity: items.length > 0 ? 1 : 0,
    width: items.length > 0 ? "30%" : "0px",
  });
  return (
    <Desktop>
      <Spring
        config={{ duration: 300 }}
        opacity={items.length > 0 ? 1 : 0}
        width={items.length > 0 ? "25vw" : "0vw"}
      >
        {(props) => (
          <Container style={props}>
            {items.map((item) => {
              return <Item {...item} />;
            })}
          </Container>
        )}
      </Spring>
    </Desktop>
  );
}

const Container = styled(animated.div)`
  width: 25vw;
  background-color: red;
  min-height: 500px;
`;
