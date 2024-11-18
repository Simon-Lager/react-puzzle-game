import styled, { css } from "styled-components"

type StyledProps = {
  $canMove: boolean
  $order: number
  $empty: boolean
}

export const TileContainer = styled.div<StyledProps>`
  aspect-ratio: 1;
  background: ${(p) => (p.$empty ? "#195e56" : "#e9c46a")};
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  pointer-events: none;
  display: grid;
  place-items: center;
  order: ${(p) => p.$order};
  transition: all 0.4s;

  ${(p) =>
    p.$canMove &&
    !p.$empty &&
    css`
      cursor: pointer;
      pointer-events: all;

      &:hover {
        opacity: 0.8;
      }
    `};
`
