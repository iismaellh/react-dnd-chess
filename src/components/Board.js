import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';
import { Game } from './Game';
import DeathBoard from './BoardDeath';
import BoardSquare from './BoardSquare';
import { checkDead, restartBoard } from './Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class Board extends Component {
  static propTypes = {
    Game: PropTypes.object.isRequired
  }

  startAgain() {
    return restartBoard;
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    let render = () => {
      for (const key of Object.keys(Game.pieces)) {  
        if (x === this.props.Game.pieces[key].position[0] && y === this.props.Game.pieces[key].position[1] && this.props.Game.pieces[key].status === 'alive') {
          return <Piece piecePosX={x} piecePosY={y} pieceName={key} pieceType={Game.pieces[key].type} pieceIcon={Game.pieces[key].icon} pieceGroup={Game.pieces[key].group} pieceStatus={this.props.Game.pieces[key].status}/>;
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
    let dead = this.props.Game.game.death ? <DeathBoard /> : null;
    let turn = this.props.Game.game.turn === 'white' ? '#8bc34a' : '#000000';

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
          height: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: '100px',
          minHeight: '100px',
          border: '5px solid #6b6b6b',
          float: 'left',
          marginLeft: '5vw'
        }} className="boardDeath">{dead}</div>

         <a onClick={this.startAgain()}
        style={{
          position: 'relative',
          padding: '7px 10px',
          margin: '10px 0 0 0',
          clear: 'both',
          background: '#8bc34a',
          float: 'left',
          borderRadius: '1px',
          cursor: 'pointer'
        }} id="boardRestart">Restart Board</a>

        <span onClick={this.startAgain()}
        style={{
          position: 'relative',
          padding: '7px 10px',
          margin: '10px 0 0 10px',
          background: turn,
          color: '#ffffff',
          float: 'left',
          borderRadius: '1px',
        }} id="boardTurn">Turn: {this.props.Game.game.turn.charAt(0).toUpperCase() + this.props.Game.game.turn.substr(1)}</span>

      </div>    
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);