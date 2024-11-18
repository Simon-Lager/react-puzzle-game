import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { INITIAL_GRID_SIZE } from "./constants"
import {
  shuffleTiles,
  calculatePosition,
  swapTiles,
  isGameWon
} from "./helpers"
import Tile from "./components/Tile"
import Popup from "./components/Popup"
import Toolbar from "./components/Toolbar"
import { Wrapper, Container, Title, Board } from "./App.styled"

type Position = {
  x: number
  y: number
}

const App = () => {
  const [gridSize, setGridSize] = useState<number>(INITIAL_GRID_SIZE)
  const [tiles, setTiles] = useState<number[]>([])
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const emptyIndex = tiles.indexOf(tiles.length - 1)
  const emptyPosition = calculatePosition(
    tiles.indexOf(tiles.length - 1) + 1,
    gridSize
  )

  const handleTileClick = (tileIndex: number, position: Position) => {
    // Move tiles left
    if (position.y === emptyPosition.y && tileIndex > emptyIndex) {
      const moveableTiles = tiles.filter(
        (_, index) => index <= tileIndex && index > emptyIndex
      )

      setTiles(swapTiles(moveableTiles, tiles))
    }

    // Move tiles right
    if (position.y === emptyPosition.y && tileIndex < emptyIndex) {
      const moveableTiles = tiles.filter(
        (_, index) => index >= tileIndex && index < emptyIndex
      )

      setTiles(swapTiles(moveableTiles.reverse(), tiles))
    }

    // Move tiles up
    if (position.x === emptyPosition.x && tileIndex > emptyIndex) {
      const moveableTiles = tiles.filter((_, index) => {
        const tilePos = calculatePosition(index + 1, gridSize)

        return (
          tilePos.x === emptyPosition.x &&
          index <= tileIndex &&
          index > emptyIndex
        )
      })

      setTiles(swapTiles(moveableTiles, tiles))
    }

    // Move tiles down
    if (position.x === emptyPosition.x && tileIndex < emptyIndex) {
      const moveableTiles = tiles.filter((_, index) => {
        const tilePos = calculatePosition(index + 1, gridSize)

        return (
          tilePos.x === emptyPosition.x &&
          index >= tileIndex &&
          index < emptyIndex
        )
      })

      setTiles(swapTiles(moveableTiles.reverse(), tiles))
    }
  }

  useEffect(() => {
    setTiles(shuffleTiles(gridSize))
  }, [gridSize])

  useEffect(() => {
    if (isGameWon(tiles) && tiles !== undefined && tiles.length !== 0) {
      setShowPopup(true)
    }
  }, [tiles])

  return (
    <Wrapper>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Container>
        <Title>Puzzle game</Title>
        <Board $gridSize={gridSize}>
          {tiles.map((tile, index) => (
            <Tile
              key={uuidv4()}
              tile={tile}
              index={index}
              gridSize={gridSize}
              emptyPosition={emptyPosition}
              position={calculatePosition(index + 1, gridSize)}
              handleTileClick={handleTileClick}
            />
          ))}
        </Board>
        <Toolbar
          gridSize={gridSize}
          setGridSize={setGridSize}
          setTiles={setTiles}
        />
      </Container>
    </Wrapper>
  )
}

export default App
