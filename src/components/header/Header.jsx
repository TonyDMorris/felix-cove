import React, { useRef } from "react";
import styled from "styled-components";
import { Desktop, Mobile, Tablet } from "../Responsive";

import video from "../../assets/ducks.mp4";
import { QuoteCycler } from "./QuoteCycler";
export function Header() {
  return (
    <React.Fragment>
      <Desktop>
        <Container width={"20%"}>
          <Video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </Video>
          <QuoteCycler />
        </Container>
      </Desktop>
      <Mobile>
        <Container width={"100%"}>
          <Video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </Video>
          <QuoteCycler />
        </Container>
      </Mobile>
      <Tablet>
        <Container width={"100%"}>
          <Video autoPlay loop muted height={"auto"}>
            <source src={video} type="video/mp4" />
          </Video>
          <QuoteCycler />
        </Container>
      </Tablet>
    </React.Fragment>
  );
}

const Container = styled.div`
  position: relative;
  width: ${(props) => props.width};

  overflow: hidden;
  min-width: 375px;
`;

const Video = styled.video`
  position: absolute;
  left: 50%;
  top: 50%;
  /* The following will size the video to fit the full container. Not necessary, just nice.*/
  height: ${(props) => {
    return props.height ? props.height : "100%";
  }};
  width: auto;

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 0;
`;
