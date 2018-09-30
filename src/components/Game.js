
import GameData from './GameData';

export let Game = JSON.parse(JSON.stringify(GameData));

let observer = null;

function emitChange(reset) {
    if(reset !== undefined) {
        Game = JSON.parse(JSON.stringify(GameData));
    }

    observer(Game);
}

export function restartBoard() {
    emitChange(true);
}

export function observe(o) {
    if (observer) {
    throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();
}

function movePiece(toX, toY, piece) {
    Game.pieces[piece].position = [toX, toY];
    emitChange();
}

export function movePieces(toX, toY, piece) {
    let move = true;

    if(move) {
        movePiece(toX, toY, piece);
        takePiece(toX, toY, piece);
        checkTurn(piece);
    }
   
    emitChange();
}

export function takePiece(toX, toY, piece) {
    let enemy = null;

    for(const key of Object.keys(Game.pieces)) {
        if(Game.pieces[key].position[0] === toX && Game.pieces[key].position[1] === toY && Game.pieces[key].group !== Game.pieces[piece].group) {
            enemy = key; 
        } 
    }  

    if(enemy) {
        Game.pieces[enemy].status = 'taken';   
    }

    emitChange();
}

export function checkTurn(piece) {
    if(Game.pieces[piece].group === 'white') {
        Game.game.turn = 'black';
        Game.game.lastTurn = 'white';
    } else {
        Game.game.turn = 'white';
        Game.game.lastTurn = 'black';
    }
    emitChange();
}

export function canMovePieces(toX, toY, piece) {
    let pos = true; 
    const [x, y] = Game.pieces[piece].position;
    const dx = toX - x;
    const dy = toY - y;

    // switch(GameData.pieces[piece]['type']) {
    //     case 'knight':
    //         pos = (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    //         break;
    //     case 'pawn':
    //         pos = (Math.abs(toY - y) === 1);
    //         break;
    //     default:
    //         pos = false
    // }

    if(Game.pieces[piece].group === Game.game.lastTurn) pos = false;

    return pos;
}