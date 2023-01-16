import styled from "styled-components";
import { Div, MainDiv } from "../types/style.types";

export const StyledMainDiv = styled.div<MainDiv>`
  width: 100%;
  min-height: 100vh;
  padding: ${(props) => props.padding || "2%"};
`;

export const StyledDiv = styled.div<Div>`
  margin: ${(props) => props.margin || "0"};
  height: ${(props) => props.height || "1.15em"};
  width: ${(props) => props.width || "100%"};
  font-size: ${(props) => props.size || "18px"};
  border-width: ${(props) => props.bw || "0"};
  border-style: ${(props) => props.bs || "solid"};
  color: ${(props) => props.color || "#000"};
`;
