import Card from './Card';

class Game{

  constructor(){
    this.player = {};
    this.cards = [];
    this.winner;
    this.targetCard;
  }

  createStack(){
    this.cards.push(new Card("male"));
    this.cards.push(new Card("female"));
  }

  selectTarget(){
    this.cards[0].target = true;
    let targetCardList = this.cards.filter((card)=>{
      return card.target == true
    });
    this.targetCard = targetCardList[0];
  }

  sieve(characterAtribute){



    console.log(this);

    if(this.targetCard.gender == characterAtribute){
      console.log("Yes!");

      let matchedCards = this.cards.filter((card)=>{
        if (card.gender !== characterAtribute){
          card.active = false;
          return true;
        }
      });
    }

    else{

      console.log("No!");

      let matchedCards = this.cards.filter((card)=>{
        if (card.gender == characterAtribute){
          card.active = false;
          return true;
        }
      });
      
    }

    console.log(this.cards);
  }
}

export default Game;