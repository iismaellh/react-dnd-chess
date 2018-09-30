import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';

export class BoardDeath extends Component {
  static propTypes = {
    deadPieces: PropTypes.object.isRequired
  }

  render() {
    const data = this.props.deadPieces;
    let corpse = Object.keys( data )
            .map( key => {
                if(data[key].status === 'taken') {
                  return (
                    <Piece key={key} piecePosX={data[key].position[0]} piecePosY={data[key].position[1]} pieceName={key} pieceType={data[key].type} pieceIcon={data[key].icon} pieceGroup={data[key].group} pieceStatus={data[key].status}/> );
                } 
            } );
    
    return (
      <div id="graveyard">
        {corpse}  
      </div>
    )
  }
}

export default BoardDeath;
