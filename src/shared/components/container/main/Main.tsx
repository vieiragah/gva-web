import styled, {css} from "styled-components";
import { InterfaceStyle } from "../../../../interfaces";

export const Main = styled.main<InterfaceStyle>`
  padding: ${(props) => props.$padding};
  max-width: ${(props) => props.$maxWidth || "75vw"};
  width: ${(props) => props.$width || "70vw"};
  gap: ${(props) => props.$gap};
  height: ${(props) => props.$height || "auto"};
  margin: ${(props) => props.$margin || "30px 0"};
  margin-left: ${(props) => props.$marginLeft};
  box-shadow: ${(props) => props.$boxShadow};
  margin-right: ${(props) => props.$marginRight};
  min-width: ${(props) => props.$minWidth};
  transition: 0.5s;
  ${(props) =>
    props.$variant === "shadow" &&
    css<InterfaceStyle>`
      box-shadow: ${(props) =>
        props.$boxShadow || "0px 6px 18px 0px #0000000F"};
      padding: ${(props) => props.$padding};
      width: ${(props) => props.$width};
    `}
    @media (max-width: 1100px) {
    min-width: 650px;
    margin-left: ${(props) => props.$marginLeft};
    transition: .5s;
  }
`;
