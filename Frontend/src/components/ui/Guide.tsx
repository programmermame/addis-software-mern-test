import styled from "@emotion/styled";
import {
  // Style functions
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

  // Types
  type ColorProps,
  type SpaceProps,
  type LayoutProps,
  type FlexboxProps,
  type GridProps,
  type BorderProps,
  type ShadowProps,
  type TypographyProps,
  type BackgroundProps,
  type PositionProps
} from "styled-system";

type GuideProps =
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



const Guide = styled.div<GuideProps>`
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
`

export default Guide;