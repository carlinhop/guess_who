import React from 'react';
import ClassNames from 'classnames';

const Card = function(props){
  console.log(props);
  let classes = ClassNames("card", {active: props.active})

  return (<div className={classes}>{props.gender}</div>)

}

export default Card;
