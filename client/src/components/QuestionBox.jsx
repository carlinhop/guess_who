import React from 'react';


class QuestionBox extends React.Component{

  constructor(props){
    super(props);
    
  }

  render(){
    return(
    <div className="question-box">
      <button id="male" onClick={(e)=>{
        console.log(e);
        this.props.game.sieve("male");
      }}>Is it male?</button>
      <button id="female" onClick={(e)=>{
        console.log(e);
        this.props.game.sieve("female");
      }} onClick={this.props.test}>Is it female?</button>
    </div>)
  }
}

export default QuestionBox;