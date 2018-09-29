
import Pieces from './Pieces';

export let piecesData = Pieces;

let observer = null;

function emitChange() {
  observer(piecesData);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function movePieces(toX, toY, piece) {
    piecesData[piece].position = [toX, toY];
    emitChange();
}

export function takePiece(toX, toY, piece) {
    for(const key of Object.keys(Pieces)) {
        if(piecesData[key].position[0] === toX && piecesData[key].position[1] === toY) {
            piecesData[key].status = 'taken';    
            piecesData[piece].status = 'alive'; 
        }     
    }  
    emitChange();
}

export function canMovePieces(toX, toY, piece) {
    let pos = true; 
    const [x, y] = piecesData[piece].position;
    const dx = toX - x;
    const dy = toY - y;

    switch(piecesData[piece]['type']) {
        case 'knight':
            pos = (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
            break;
        case 'pawn':
            pos = (Math.abs(toY - y) === 1);
            break;
        default:
            pos = false
    }

    return true;
}