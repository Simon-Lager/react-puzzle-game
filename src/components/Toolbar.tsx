import { MIN_GRID_SIZE, MAX_GRID_SIZE } from "../constants"
import { shuffleTiles } from "../helpers"
import Button from "./Button"
import { ToolbarContainer, SizeSelect, SizeButton, Qty } from "./Toolbar.styled"

type Props = {
  gridSize: number
  setGridSize: React.Dispatch<React.SetStateAction<number>>
  setTiles: React.Dispatch<React.SetStateAction<number[]>>
}

const Toolbar = ({ gridSize, setGridSize, setTiles }: Props) => (
  <ToolbarContainer>
    <SizeSelect>
      <SizeButton
        handleOnClick={() => setGridSize(gridSize - 1)}
        $disabled={gridSize === MIN_GRID_SIZE}
      >
        -
      </SizeButton>
      <Qty>
        {gridSize} x {gridSize}
      </Qty>
      <SizeButton
        handleOnClick={() => setGridSize(gridSize + 1)}
        $disabled={gridSize === MAX_GRID_SIZE}
      >
        +
      </SizeButton>
    </SizeSelect>
    <Button handleOnClick={() => setTiles(shuffleTiles(gridSize))}>
      New game
    </Button>
  </ToolbarContainer>
)

export default Toolbar
