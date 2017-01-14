import Card from './Card';

class Game{

  constructor(){
    this.player = {};
    this.cards = [];
    this.winner;
  }

  createStack(){
    this.cards.push(new Card("male"));
    this.cards.push(new Card("female"));
  }
}

export default Game;