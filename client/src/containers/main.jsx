import React from 'react';
import CardBox from './CardBox';
import QuestionBox from '../components/QuestionBox';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {game: props.game};

  }

  render(){
    return (
      <div className="main">
        <CardBox game={this.state.game}/>
        <QuestionBox game={this.state.game}/>

      </div>)
  }
}

export default Main