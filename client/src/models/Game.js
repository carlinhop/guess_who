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

  sieve(characterAtribute){
    let matchedCards = this.cards.filter((card)=>{
      if (card.gender == characterAtribute){
        card.active = false;
        return true;
      }
    });
    

    console.log(this.cards);
  } 
}

export default Game;