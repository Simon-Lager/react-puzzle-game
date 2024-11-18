import { TileContainer } from "./Tile.styled"

type Position = {
  x: number
  y: number
}

type Props = {
  tile: number
  index: number
  position: Position
  emptyPosition: Position
  emptyIndex: number
  handleTileClick: (index: number, position: Position) => void
}

const Tile = ({
  tile,
  index,
  position,
  emptyPosition,
  emptyIndex,
  handleTileClick
}: Props) => {
  const canMove =
    position.x === emptyPosition.x || position.y === emptyPosition.y
  const isEmpty = index === emptyIndex

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
