import React from 'react';

const CharComponent = (props) => {

  let style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    border: 'solid 2px blue',
    width: '60%'
  }
  return (
    <div style={style}>
      <p>This is the CharComponent</p>
    </div>
  )
}

export default CharComponent;
