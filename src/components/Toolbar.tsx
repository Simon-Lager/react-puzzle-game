import { MIN_GRID_SIZE, MAX_GRID_SIZE } from "../constants"
import { shuffleTiles } from "../helpers"
import Button from "./Button"
import { ToolbarContainer, SizeSelect, SizeButton, Qty } from "./Toolbar.styled"

type Props = {
  columns: number
  rows: number
  setColumns: React.Dispatch<React.SetStateAction<number>>
  setRows: React.Dispatch<React.SetStateAction<number>>
  setTiles: React.Dispatch<React.SetStateAction<number[]>>
}

const Toolbar = ({ columns, rows, setColumns, setRows, setTiles }: Props) => (
  <ToolbarContainer>
    <div>
      <SizeSelect>
        <SizeButton
          handleOnClick={() => setColumns(columns - 1)}
          $disabled={columns === MIN_GRID_SIZE}
        >
          -
        </SizeButton>
        <Qty>↔</Qty>
        <SizeButton
          handleOnClick={() => setColumns(columns + 1)}
          $disabled={columns === MAX_GRID_SIZE}
        >
          +
        </SizeButton>
      </SizeSelect>
      <SizeSelect>
        <SizeButton
          handleOnClick={() => setRows(rows - 1)}
          $disabled={rows === MIN_GRID_SIZE}
        >
          -
        </SizeButton>
        <Qty>↕</Qty>
        <SizeButton
          handleOnClick={() => setRows(rows + 1)}
          $disabled={rows === MAX_GRID_SIZE}
        >
          +
        </SizeButton>
      </SizeSelect>
    </div>
    <Button handleOnClick={() => setTiles(shuffleTiles(columns * rows))}>
      New game
    </Button>
  </ToolbarContainer>
)

export default Toolbar
