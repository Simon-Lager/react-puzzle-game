import { Backdrop, PopupContainer } from "./Popup.styled"

type Props = {
  showPopup: boolean
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Popup = ({ showPopup, setShowPopup }: Props) => (
  <>
    <Backdrop $showPopup={showPopup} onClick={() => setShowPopup(false)} />
    <PopupContainer $showPopup={showPopup} onClick={() => setShowPopup(false)}>
      <h2>Congratulations! 🎉</h2>
      <p>
        Only peaople with an <b>IQ</b> above <b>180</b> can solve this
        impossible puzzle!
      </p>
    </PopupContainer>
  </>
)

export default Popup
