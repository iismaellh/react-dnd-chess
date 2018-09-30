import React, { Component } from 'react';
import Piece from './Piece';
import { Game } from './Game';

export class BoardDeath extends Component {
  render() {
    console.log(Game.game.death);
    let corpse = Game.game.death.map( key => {
                  return (
                    <Piece key={key.name} piecePosX={key.position[0]} piecePosY={key.position[1]} pieceName={key} pieceType={key.type} pieceIcon={key.icon} pieceGroup={key.group} pieceStatus={key.status}/> );
            });
    
    return (
      <div id="graveyard">
        {corpse}  
      </div>
    )
  }
}

export default BoardDeath;
