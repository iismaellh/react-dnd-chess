import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';
import Pieces from './Pieces';
import DeathBoard from './BoardDeath';
import BoardSquare from './BoardSquare';
import { checkDead } from './Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class Board extends Component {
  static propTypes = {
    piecesData: PropTypes.object.isRequired
  }

  checkDead(object) {
    let dead = false;
    for (const key of Object.keys(object)) {  
        if (object[key].status === 'taken') {
            dead = true;
        } 
    }

    return dead;
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    let render = () => {
      for (const key of Object.keys(Pieces)) {  
        if (x === this.props.piecesData[key].position[0] && y === this.props.piecesData[key].position[1] && this.props.piecesData[key].status === 'alive') {
          return <Piece piecePosX={x} piecePosY={y} pieceName={key} pieceType={Pieces[key].type} pieceIcon={Pieces[key].icon} pieceGroup={Pieces[key].group} pieceStatus={this.props.piecesData[key].status}/>;
        }
      }
    }
 
    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x}
                     y={y}
                     >
          {render()}
        </BoardSquare>
      </div>
    );
  }

  render() {
    const squares = [];
    let dead = this.checkDead(this.props.piecesData) ? <DeathBoard deadPieces={this.props.piecesData} /> : null;

    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div>
        <div style={{
          width: '40vw',
          height: '40vw',
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: '500px',
          minHeight: '500px',
          border: '5px solid #6b6b6b',
          float: 'left'
        }} className="boardPieces">{squares}</div>

        <div style={{
          position: 'relative',
          width: '20vw',
          height: '20vw',
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: '100px',
          minHeight: '500px',
          border: '5px solid #6b6b6b',
          float: 'left',
          marginLeft: '5vw'
        }} className="boardDeath">{dead}</div>
      </div>    
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);