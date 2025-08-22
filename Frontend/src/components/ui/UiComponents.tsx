import styled from "@emotion/styled";
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  border,
  shadow,
  typography,
  background,
  position,

  type ColorProps,
  type SpaceProps,
  type LayoutProps,
  type FlexboxProps,
  type GridProps,
  type BorderProps,
  type ShadowProps,
  type TypographyProps,
  type BackgroundProps,
  type PositionProps,
} from "styled-system";

export type StyleProps =
  & ColorProps
  & SpaceProps
  & LayoutProps
  & FlexboxProps
  & GridProps
  & BorderProps
  & ShadowProps
  & TypographyProps
  & BackgroundProps
  & PositionProps;

export const Box = styled("div") <StyleProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${border}
  ${shadow}
  ${typography}
  ${background}
  ${position}
`;

export const Container = styled(Box)`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;

`;

export const FlexRow = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
   &:hover {
    opacity: 0.9;
    cursor:pointer;
  }
`;

export const Card = styled(Box)`
  background:black;
  color:white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Input = styled("input") <StyleProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${typography}
  ${shadow}
  ${background}
  ${position}
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color:#ADD8E6;
`;

export const Select = styled("select") <StyleProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${typography}
  ${shadow}
  ${background}
  ${position}
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color:#ADD8E6;

`;

export const Button = styled("button") <StyleProps>`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${typography}
  ${shadow}
  ${background}
  ${position}
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  transition: all 0.2s ease-in-out;
  

  &:hover {
    opacity: 0.9;
  }
`;

interface HeadingProps extends StyleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = styled("h2") <HeadingProps>`
    margin: 0;
    ${color}
    ${space}
    ${layout}
    ${typography}
    ${position}
    ${border}
    ${shadow}
    ${flexbox}
    ${grid}
    ${background}
  `;

export const ModalOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled(Box)`
  background: #212121;
  border-radius: 8px;
  padding: 3rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  position: relative;
`;

export const PageWrapper = styled(Box)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;
