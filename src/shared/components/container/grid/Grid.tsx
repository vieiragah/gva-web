import styled from "styled-components";
import { InterfaceStyle } from "../../../../interfaces";

export const Grid = styled.div<InterfaceStyle>`
    display: ${(props) => props.$display || 'grid'};
  width: ${(props) => props.$width || "100%"};
  text-align: ${(props) => props.$textAlign || "center"};
  align-items: ${(props) => props.$alignItens || "center"};
  padding: ${(props) => props.$padding || "30px"};
  border-radius: ${(props) => props.$borderRadius || "8px"};
  grid-template-columns: ${(props) =>
    props.$gridTemplateColumns || "auto auto auto auto auto"};
  grid-template-rows: ${(props) => props.$gridTemplateRows || "auto auto"};
  gap: ${(props) => props.$gap || "10px 30px"};
  grid-auto-flow: ${(props) => props.$gridAutoFlow || "row"};
  /* box-shadow: 0px 0px 16px 0px #00000024; */
  /* grid-template-areas:
    ". . . . ."
    ". . . . ."; */
`;
