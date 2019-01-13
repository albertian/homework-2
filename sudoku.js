function validSolution(board){
    const squadValues = new Array(9).fill().map(() => ({}));
    const columnValues = new Array(9).fill().map(() => ({}));
    for (let i = 0, len = board.length; i < len; i++) {
        const rowValues = {};
        for (let j = 0; j < len; j++) {
            const value = board[i][j];
            const littleSquadIndex = getLittleSquadIndex(i, j);
            if (rowValues[value] === undefined && columnValues[j][value] === undefined && squadValues[littleSquadIndex][value] === undefined) {
                rowValues[value] = true;
                columnValues[j][value] = true;
                squadValues[littleSquadIndex][value] = true;
            } else {
                return false;
            }
        }
    }
    return true;
}
function getLittleSquadIndex(i, j) {
    i = Math.floor(i / 3);
    j = Math.floor(j / 3);
    return i * 3 + j;
}