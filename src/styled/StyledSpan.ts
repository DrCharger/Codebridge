import styled from "styled-components";
import { Span } from "../types/style.types";

export const StyledSpan = styled.span<Span>`
  display: inline-block;
  font-size: ${(props) => props.size || "1em"};
  color: ${(props) => props.color || "#000"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.backColor || "transparent"};
  white-space: pre;
`;
