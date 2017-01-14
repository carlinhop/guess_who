import React from 'react';
import CardBox from './CardBox';

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main">
        <CardBox />

      </div>)
  }
}

export default Main