import styled, { css } from "styled-components"
import Button from "./components/Button"

type BoardProps = {
  $gridSize: number
}

type SizeButtonProps = {
  $disabled: boolean
}

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 0 10px;

  @media only screen and (min-width: 768px) {
    padding: 0 20px;
  }
`

export const Board = styled.div<BoardProps>`
  width: 100%;
  background: #2a9d8f;
  gap: 5px;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$gridSize}, 1fr);
  position: relative;

  @media only screen and (min-width: 768px) {
    gap: 10px;
    padding: 10px;
  }
`

export const Title = styled.h1`
  margin-top: 0;
  text-align: center;
`

export const Toolbar = styled.div`
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
  width: 100px;
`
