import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import Game from './models/Game';
import Player from './models/Player';


const game = new Game();
game.createStack();
game.selectTarget();
game.player = new Player("Carlos");
console.log(game.targetCard);



window.onload = function(){
  ReactDOM.render(
    <Main game={game}></Main>,
    document.getElementById('app')
  );
}
