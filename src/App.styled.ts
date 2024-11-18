import styled, { css } from "styled-components"
import Button from "./components/Button"

type BoardProps = {
  $gridSize: number
}

type SizeButtonProps = {
  $disabled: boolean
}

export const Wrapper = styled.main`
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 20px;
`

export const Board = styled.div<BoardProps>`
  width: 100%;
  background: #2a9d8f;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$gridSize}, 1fr);
  gap: 10px;
  position: relative;
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
