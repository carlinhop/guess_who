import React from 'react';

class QuestionBox extends React.Component{

  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
    <div className="question-box">
      <button id="male" onClick={(e)=>{
        console.log(e)}}>Male</button>
      <button id="female" onClick={(e)=>{
        console.log(e)}}>Female</button>
    </div>)
  }
}

export default QuestionBox;