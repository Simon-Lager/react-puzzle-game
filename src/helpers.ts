// Create shuffled array based on gridsize
export const shuffleTiles = (gridSize: number) =>
  [...Array(gridSize * gridSize).keys()]
    .map((tile) => ({ value: tile, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((tile) => tile.value)

// Calculate x, y position for tile
export const calculatePosition = (index: number, gridSize: number) => {
  const x = index % gridSize === 0 ? gridSize : index % gridSize
  const y = Math.ceil(index / gridSize)

  return { x, y }
}

// Swap position of two tiles
const swap = (tiles: number[], tile: number, emptyTile: number) => {
  ;[tiles[tile], tiles[emptyTile]] = [tiles[emptyTile], tiles[tile]]

  return tiles
}

// Swap all moveable tiles with empty tile, one at a time
export const swapTiles = (moveableTiles: number[], tiles: number[]) => {
  let newArr = [...tiles]

  moveableTiles.forEach((tile) => {
    const arr = swap(
      newArr,
      tiles.indexOf(tile),
      newArr.indexOf(tiles.length - 1)
    )
    newArr = arr
  })

  return newArr
}

// Check if tiles are in order and game is won
export const isGameWon = (arr: number[]) =>
  arr.every(
    (value: number, index: number, array: number[]) =>
      index === 0 || value >= array[index - 1]
  )
