import styled from "styled-components"

export const StyledButton = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 0 05px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  background: #e76f51;
  color: #ffffff;

  @media only screen and (min-width: 768px) {
    transition: opacity 0.4s;
    padding: 0 40px;
    font-size: 16px;
    height: 45px;

    &:hover {
      opacity: 0.8;
    }
  }
`
