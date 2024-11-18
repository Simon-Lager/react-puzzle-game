import { TileContainer } from "./Tile.styled"

type Position = {
  x: number
  y: number
}

type Props = {
  tile: number
  index: number
  gridSize: number
  position: Position
  emptyPosition: Position
  handleTileClick: (index: number, position: Position) => void
}

const Tile = ({
  tile,
  index,
  gridSize,
  position,
  emptyPosition,
  handleTileClick
}: Props) => {
  const canMove =
    position.x === emptyPosition.x || position.y === emptyPosition.y
  const isEmpty = tile + 1 === gridSize * gridSize

  return (
    <TileContainer
      $order={index}
      onClick={() => (canMove ? handleTileClick(index, position) : null)}
      $canMove={canMove}
      $empty={isEmpty}
    >
      {!isEmpty && tile + 1}
    </TileContainer>
  )
}

export default Tile
