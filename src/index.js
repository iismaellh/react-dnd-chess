import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { observe } from './components/Game';

const rootEl = document.getElementById('root');

observe((piecesData, deadPieces) =>
  ReactDOM.render(
    <Board piecesData={piecesData} deadPieces={deadPieces} />,
    rootEl
  )
);