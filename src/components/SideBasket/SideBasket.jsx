import React, { useContext } from "react";
import styled from "styled-components";
import BasketContext from "../../context/BasketContext";
import { animated, useSpring, Spring, useTransition } from "react-spring";

import { Desktop } from "../Responsive";
import { Item } from "./Item";
export function SideBasket() {
  const { items, setItems } = useContext(BasketContext);
  const transitions = useTransition(items, {
    from: { x: items.length > 1 ? -500 : 0, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 500, opacity: 0 },
    delay: 200,
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
            {transitions((style, item) => (
              <animated.div style={style}>
                <Item {...item} />
              </animated.div>
            ))}
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
