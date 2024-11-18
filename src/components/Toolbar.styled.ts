import styled, { css } from "styled-components"
import Button from "./Button"

type SizeButtonProps = {
  $disabled: boolean
}

export const ToolbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 700;
`

export const SizeSelect = styled.div`
  display: flex;
  align-items: center;
`

export const SizeButton = styled(Button)<SizeButtonProps>`
  padding: 0;
  width: 45px;
  font-size: 24px;

  ${(p) =>
    p.$disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`

export const Qty = styled.div`
  background: #e76f51;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin: 0 2px;
  width: 80px;

  @media only screen and (min-width: 768px) {
    width: 100px;
  }
`
