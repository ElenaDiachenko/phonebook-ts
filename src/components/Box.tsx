import styled from 'styled-components';

// import {
//   color,
//   space,
//   layout,
//   flexbox,
//   grid,
//   background,
//   border,
//   position,
// } from 'styled-system';

// export const Box = styled('div')(
//   color,
//   space,
//   layout,
//   flexbox,
//   grid,
//   background,
//   border,
//   position
// );

import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  compose,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps;

export const Box = styled.div<BoxProps>`
  ${compose(space, color, layout, flexbox, grid, background, border, position)}
`;
