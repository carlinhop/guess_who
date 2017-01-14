import React from 'react';
import CardBox from './CardBox';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {game: props.game};

  }

  render(){
    return (
      <div className="main">
        <CardBox game={this.state.game}/>

      </div>)
  }
}

export default Main