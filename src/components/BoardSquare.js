import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { takePiece, canMovePieces, movePieces, Game } from './Game';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const target = getOccupyingPiece(Game.pieces, props.x, props.y);
    const piece = { pieceName: item.pieceName, x: props.x, y: props.y };

    if(canMovePieces(item.pieceName)) {
      if (target) {
        if(Game.pieces[item.pieceName].group !== Game.pieces[target.name].group) {
          movePieces(props.x, props.y, item.pieceName, target.name);
        } else if(Game.pieces[item.pieceName].group === Game.pieces[target.name].group) {
          alert('You can\'t take an ally!');
        }
      } else {
          movePieces(props.x, props.y, item.pieceName, null);
      }
    }

    return piece;
  }
};

function getOccupyingPiece(obj, val1, val2) {
  for(var key in obj) {
    if(obj[key]['position'][0] === val1 && obj[key]['position'][1] === val2) {
      return obj[key];
    }
  }
}


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class BoardSquare extends Component {
  render() {
    const { x, y, connectDropTarget, isOver, children } = this.props;
    const black = (x + y) % 2 === 1;
    let occupied = 'unoccupied';

    if(children !== undefined) {
      occupied = 'occupied';
    }

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black} x={x} y={y} occupied={occupied}>
          {this.props.children}
        </Square>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget('piece', squareTarget, collect)(BoardSquare);