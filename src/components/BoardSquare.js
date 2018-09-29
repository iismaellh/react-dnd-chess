import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { canMovePieces, movePieces, piecesData } from './Game';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();

    if (canMovePieces(props.x, props.y, item.pieceName)) {
        movePieces(props.x, props.y, item.pieceName);
    }

    return { pieceName: item.pieceName, x: props.x, y: props.y }
  }
};

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