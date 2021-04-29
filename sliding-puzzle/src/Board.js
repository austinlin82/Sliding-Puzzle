import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"
import { swap } from "./helpers"

function Board() {
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);

    const swapTiles = (tileIndex) => {
        const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
        setTiles(swappedTiles)
    }

    const handleTileClick = (index) => {
        swapTiles(index)
    }

    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
    };

    return (
       <div>
           <ul style={style} className="board">
               {tiles.map((tile, index) => (
                   <Tile
                        key={tile}
                        index={index}
                        tile={tile}
                        width={pieceWidth}
                        height={pieceHeight}
                        handleTileClick={handleTileClick}
                   />
               ))}
           </ul>
       </div> 
    );
}

export default Board;

