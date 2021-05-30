import { animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";
import styled from "styled-components";

export function QuoteCycler() {
  const [quotes] = useState([
    {
      quoteText: "This Product Is Fucking Awesome, You Should Deffo Buy It!",
      quotee: "Totally Pumped Magazine.",
      id: 1,
    },
    {
      quoteText: "And These Quotes Change How Good Is That?!?!",
      quotee: "Times Magazine But About",
      id: 2,
    },
  ]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (quoteIndex >= quotes.length - 1) {
        setQuoteIndex(0);
      } else {
        setQuoteIndex(quoteIndex + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  });

  const fadingTextPropsTransition = useTransition(
    [quotes[quoteIndex]],

    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  );

  return fadingTextPropsTransition((props, item) => {
    return (
      <QuoteContainer style={props}>
        <Quote>
          <p>{item.quoteText}</p>
        </Quote>

        <Quotee>{item.quotee}</Quotee>
      </QuoteContainer>
    );
  });
}
const QuoteContainer = styled(animated.div)`
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
  background-color: rgba(245, 245, 245, 0.5);
`;
const Quote = styled.div`
  border-left: solid 10px black;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  margin: 1.5em 10px;
  &:before {
    color: black;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  &:after {
    color: black;
    content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline;
    font-size: 2em;
    font-weight: 900;
  }
`;

const Quotee = styled.p`
  font-style: italic;
  font-size: 2em;
`;
