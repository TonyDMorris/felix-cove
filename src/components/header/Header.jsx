import React, { useRef } from "react";
import styled from "styled-components";
import { Desktop, Mobile, Tablet } from "../Responsive";

import video from "../../assets/ducks.mp4";
export function Header() {
  return (
    <React.Fragment>
      <Desktop>
        <Container width={"30%"}>
          <Video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </Video>
          <ContentContainer>
            <h1>FEED THE DUCKS OR THERE WILL BE HELL TO PAY</h1>
            <br />
            <h1>I MEAN LOOK AT THESE CUTE MOTHERFUCKERS</h1>
          </ContentContainer>
        </Container>
      </Desktop>
      <Mobile>
        <Container width={"100%"}>
          <Video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </Video>
          <ContentContainer>
            <h1>FEED THE DUCKS OR THERE WILL BE HELL TO PAY</h1>
            <br />
            <h1>I MEAN LOOK AT THESE CUTE MOTHERFUCKERS</h1>
          </ContentContainer>
        </Container>
      </Mobile>
      <Tablet>
        <Container width={"100%"}>
          <Video autoPlay loop muted height={"auto"}>
            <source src={video} type="video/mp4" />
          </Video>
          <ContentContainer>
            <h1>FEED THE DUCKS OR THERE WILL BE HELL TO PAY</h1>
            <br />
            <h1>I MEAN LOOK AT THESE CUTE MOTHERFUCKERS</h1>
          </ContentContainer>
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

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  color: black;

  background-color: whitesmoke;
  opacity: 0.5;
`;
