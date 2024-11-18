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

  > div {
    display: flex;
  }
`

export const SizeSelect = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const SizeButton = styled(Button)<SizeButtonProps>`
  padding: 0;
  width: 35px;
  font-size: 24px;

  @media only screen and (min-width: 768px) {
    width: 45px;
  }

  ${(p) =>
    p.$disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`

export const Qty = styled.div`
  background: #195e56;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  margin: 0 3px;
  font-size: 24px;
  padding-bottom: 5px;

  @media only screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`
