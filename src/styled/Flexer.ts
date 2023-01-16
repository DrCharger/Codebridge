import styled from "styled-components";
import { Flex } from "../types/style.types";

export const Flexer = styled.div<Flex>`
  display: flex;
  flex-direction: ${(props) => props.row || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin: ${(props) => props.margin || "0"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  position: ${(props) => props.position || "relative"};
  bottom: 0;
`;

export const wrapperStyle = {
  overflow: "hidden",
  position: "relative",
  lineHeight: "1.5em",
  maxHeight: "4.5em",
  textAlign: "justify",
  paddingRight: "1em",
  ":before": {
    content: "'...'",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  ":after": {
    content: "''",
    position: "absolute",
    right: 0,
    width: "1em",
    height: "1em",
    marginTop: "0.2em",
    background: "white",
  },
};

export const wrapperHeaderStyle = {
  fontSize: "21px",
  fontWeight: "700",
  overflow: "hidden",
  position: "relative",
  lineHeight: "1.5em",
  maxHeight: "3em",
  textAlign: "justify",
  paddingRight: "1em",
  margin: "2% 0",
  ":before": {
    content: "'...'",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  ":after": {
    content: "''",
    position: "absolute",
    right: 0,
    width: "1em",
    height: "1em",
    marginTop: "0.2em",
    background: "white",
  },
};
