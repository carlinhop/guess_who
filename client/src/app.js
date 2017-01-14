import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import Game from './models/Game';
import Player from './models/Player';


const game = new Game();
game.createStack();
game.cards[0].target = true;
game.player = new Player("Carlos");
game.sieve(game.player.askQuestion("male"));


window.onload = function(){
  ReactDOM.render(
    <Main game={game}></Main>,
    document.getElementById('app')
  );
}
