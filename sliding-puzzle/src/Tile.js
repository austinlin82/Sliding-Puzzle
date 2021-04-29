import React from "react";
import { getMPos, getVPos } from "./helpers";
import { TILE_COUNT, GRID_SIZE} from "./constants"

function Tile(props) {
    const { tile, index, width, height, handleTileClick} = props;
    const { row, col } = getMPos(index);
    const visualPos = getVPos(row, col, width, height);
    const tileStyle = {
        width: `calc(100% / ${GRID_SIZE})`,
        height: `calc(100% / ${GRID_SIZE})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
    };

    return (
        <div
            style={{
                width: tileStyle.width,
                height: tileStyle.height,
                transform: `translate3d(${tileStyle.translateX}px, ${tileStyle.translateY}px)`,
                opacity: tile === TILE_COUNT - 1 ? 0 : 1,
            }}
            className="tile"
            onClick {...() => handleTileClick(index)}
        >
            {tile + 1}
        </div>
    )
}

export default Tile;