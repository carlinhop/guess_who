import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import Game from './models/Game.js';

const game = new Game();
game.createStack();
game.cards[0].target = true;


window.onload = function(){
  ReactDOM.render(
    <Main game={game}></Main>,
    document.getElementById('app')
  );
}
