const drawChessboard = (size: number) => {
    let chessboard: string = '';
    for (let i: number = 1; i < size; i++) {
        chessboard += '\n';
        for (let j: number = 1; j <= size; j++) {
            const cell= (i + j) % 2 === 0
            chessboard += cell ? "□" : "  ";
        }
    }
    return chessboard;
}

console.log(drawChessboard(16));