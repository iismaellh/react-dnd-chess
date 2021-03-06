import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { Game } from './Game';

const pieceSource = {
  beginDrag(props, monitor, component) {
    return { pieceName: props.pieceName, pieceType: props.pieceType, pieceStatus: props.pieceStatus };
  },

  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      const item = monitor.getDropResult();
    } 
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Piece extends Component {
  render() {
    const { connectDragSource, isDragging, pieceGroup, pieceStatus, pieceName, pieceIcon } = this.props;
    const color = pieceGroup === 'black' ? '#000000' : '#8bc34a';

    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 43,
        fontWeight: 'bold',
        cursor: 'move',
        color: color,
        position: pieceStatus === 'alive' ? 'absolute' : 'relative',
        left: pieceStatus === 'alive' ? '50%' : '0' ,
        top: pieceStatus === 'alive' ? '50%' : '0' ,
        transform: pieceStatus === 'alive' ? 'translate(-50%, -50%)' : 'none',
        float: pieceStatus === 'alive' ? 'none' : 'left'
      }}>
        {pieceIcon}
      </div>
    );
  }
}

Piece.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  pieceType: PropTypes.string.isRequired,
  pieceIcon: PropTypes.string.isRequired
};

export default DragSource('piece', pieceSource, collect)(Piece);