import React from 'react';
import CardBox from './CardBox';
import QuestionBox from '../components/QuestionBox';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {game: props.game, test: true};

    this.handleChange = function handleChange(){
      this.setState({test: false});
      console.log("changing state: " + this.state.test.toString());
      

    }.bind(this);
  }

  

  render(){
    return (
      <div className="main">
        <CardBox game={this.state.game}/>
        <QuestionBox game={this.state.game} test={this.handleChange}/>

      </div>)
  }
}

export default Main