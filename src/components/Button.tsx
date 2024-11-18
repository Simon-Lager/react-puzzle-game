import { StyledButton } from "./Button.styled"

type Props = {
  handleOnClick: () => void
  children: string
}

const Button = ({ handleOnClick, children, ...styledProps }: Props) => (
  <StyledButton type="button" onClick={() => handleOnClick()} {...styledProps}>
    {children}
  </StyledButton>
)

export default Button
