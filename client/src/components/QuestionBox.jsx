import React from 'react';

class QuestionBox extends React.Component{

  constructor(props){
    super(props);
    this.state={game: props.game};
  }

  render(){
    return(
    <div className="question-box">
      <button id="male" onClick={(e)=>{
        console.log(e);
        this.state.game.sieve("male");
      }}>Male</button>
      <button id="female" onClick={(e)=>{
        console.log(e);
        this.state.game.sieve("female");
      }}>Female</button>
    </div>)
  }
}

export default QuestionBox;