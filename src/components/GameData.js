function createPiece(piecePosition, pieceName, pieceType, pieceGroup, pieceIcon, pieceStatus) {
    return {
        position: piecePosition,
        name: pieceName,
        type: pieceType,
        group: pieceGroup,
        icon: pieceIcon,
        status: pieceStatus
    }
}

let GameData = {};

export default GameData = {
    pieces: {
        bk: createPiece([4,7], 'bk', 'king', 'black', '♚', 'alive'),
        bq: createPiece([3,7], 'bq', 'queen', 'black', '♛', 'alive'),
        br1: createPiece([0,7], 'br1', 'rook', 'black', '♜', 'alive'),
        br2: createPiece([7,7], 'br2', 'rook', 'black', '♜', 'alive'),
        bb1: createPiece([5,7], 'bb1', 'bishop', 'black', '♝', 'alive'),
        bb2: createPiece([2,7], 'bb2', 'bishop', 'black', '♝', 'alive'),
        bh1: createPiece([6,7], 'bh1', 'knight', 'black', '♞', 'alive'),
        bh2: createPiece([1,7], 'bh2', 'knight', 'black', '♞', 'alive'),
        bp1: createPiece([7,6], 'bp1', 'pawn', 'black', '♟', 'alive'),
        bp2: createPiece([6,6], 'bp2', 'pawn', 'black', '♟', 'alive'),
        bp3: createPiece([5,6], 'bp3', 'pawn', 'black', '♟', 'alive'),
        bp4: createPiece([4,6], 'bp4', 'pawn', 'black', '♟', 'alive'),
        bp5: createPiece([3,6], 'bp5', 'pawn', 'black', '♟', 'alive'),
        bp6: createPiece([2,6], 'bp6', 'pawn', 'black', '♟', 'alive'),
        bp7: createPiece([1,6], 'bp7', 'pawn', 'black', '♟', 'alive'),
        bp8: createPiece([0,6], 'bp8', 'pawn', 'black', '♟', 'alive'),
        wp1: createPiece([7,1], 'wp1', 'pawn', 'white', '♙', 'alive'),
        wp2: createPiece([6,1], 'wp2', 'pawn', 'white', '♙', 'alive'),
        wp3: createPiece([5,1], 'wp3', 'pawn', 'white', '♙', 'alive'),
        wp4: createPiece([4,1], 'wp4', 'pawn', 'white', '♙', 'alive'),
        wp5: createPiece([3,1], 'wp5', 'pawn', 'white', '♙', 'alive'),
        wp6: createPiece([2,1], 'wp6', 'pawn', 'white', '♙', 'alive'),
        wp7: createPiece([1,1], 'wp7', 'pawn', 'white', '♙', 'alive'),
        wp8: createPiece([0,1], 'wp8', 'pawn', 'white', '♙', 'alive'),
        wh1: createPiece([6,0], 'wh1', 'knight', 'white', '♘', 'alive'),
        wh2: createPiece([1,0], 'wh2', 'knight', 'white', '♘', 'alive'),
        wb1: createPiece([5,0], 'wb1', 'bishop', 'white', '♗', 'alive'),
        wb2: createPiece([2,0], 'wb2', 'bishop', 'white', '♗', 'alive'),
        wr1: createPiece([0,0], 'wr1', 'rook', 'white', '♖', 'alive'),
        wr2: createPiece([7,0], 'wr2', 'rook', 'white', '♖', 'alive'),
        wk: createPiece([3,0], 'wk', 'king', 'white', '♔', 'alive'),
        wq: createPiece([4,0], 'wq', 'queen', 'white', '♕', 'alive')
    },
    game: {
        turn: 'white',
        lastTurn: 'black',
        canMove: true,
        moves: [],
        death: []
    },
    players: {

    }
}

export const Game = {
    
} 