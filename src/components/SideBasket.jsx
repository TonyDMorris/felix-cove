import styled from "styled-components";
import { Spring, Transition, animated } from "react-spring";
import { Desktop, Tablet, Mobile, Default } from "./Responsive";
export function SideBasket() {
  return (
    <Desktop>
      <Spring>
        {(styles) => <Container stye={styles}>side basket</Container>}
      </Spring>
    </Desktop>
  );
}

const Container = styled.div`
  width: 30vw;
  background-color: blue;
`;
