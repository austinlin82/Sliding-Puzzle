import { GRID_SIZE} from "./constants"

export function getIndex(row, col) {
    return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

export function getMPos(index) {
    return {
        row: Math.floor(index / GRID_SIZE),
        col: index % GRID_SIZE,
    };
}

export function getVPos(row, col, width, height) {
    return {
        x: col * width,
        y: row * height,
    };
}

export function swap(tiles, src, dest) {
    const { row: srcRow, col: srcCol } = getMPos(src, GRID_SIZE);
    const { row: destRow, col: destCol} = getMPos(dest, GRID_SIZE);
    if (Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1) {
        const tilesResult = [...tiles];
        [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]]
        return tilesResult;
    }
    return;
}