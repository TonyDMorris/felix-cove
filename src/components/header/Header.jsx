import React from "react";
import styled from "styled-components";
import { Desktop, Mobile, Tablet } from "../Responsive";

import video from "../../assets/ducks.mp4";
export function Header() {
  return (
    <React.Fragment>
      <Desktop>
        <Container width={"50%"} height={"500px"} overflow={"inherit"}>
          <Video autoPlay loop muted width={"100%"}>
            <source src={video} type="video/mp4" />
          </Video>
        </Container>
      </Desktop>
      <Mobile>
        <Container width={"100%"} height={"100vh"} overflow={"hidden"}>
          <Video autoPlay loop muted width={"auto"}>
            <source src={video} type="video/mp4" />
          </Video>
        </Container>
      </Mobile>
      <Tablet>
        <Container width={"100%"} height={"100vh"} overflow={"hidden"}>
          <Video autoPlay loop muted width={"auto"}>
            <source src={video} type="video/mp4" />
          </Video>
        </Container>
      </Tablet>
    </React.Fragment>
  );
}

const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: ${(props) => props.overflow};
`;

const Video = styled.video`
  width: ${(props) => props.width}
  height: 100%;
`;
