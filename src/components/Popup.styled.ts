import styled from "styled-components"

type StyledProps = {
  $showPopup: boolean
}

export const Backdrop = styled.div<StyledProps>`
  display: flex;
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  transition: 0.5s;
  cursor: pointer;
  opacity: ${(p) => (p.$showPopup ? "1" : "0")};
  z-index: ${(p) => (p.$showPopup ? "1" : "-1")};
`

export const PopupContainer = styled.div<StyledProps>`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background: white;
  z-index: 2;
  padding: 30px;
  width: calc(100% - 40px);
  max-width: 500px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 14px;
  transform: translate(${(p) => (p.$showPopup ? "50%, -50%" : "50%, -300%")});
  transition: 0.5s;
`
