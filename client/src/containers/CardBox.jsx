import React from 'react';
import Card from '../components/Card';

class CardBox extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    
    let cards = this.props.game.cards.map((card, index)=>{
      return (<Card gender= {card.gender} target={card.target} key={index} active={card.active}></Card>)
      
    }); 


    return (
      <div className="card-box">
        
        {cards}

      </div>)
  }
  

}

export default CardBox;