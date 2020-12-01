import React from 'react';

const ValidationComponent = (props) => {
  return (
    <div>
    <p>Text input length: {props.textLength}</p>

    <p>
    {
      props.textLength >= 5 ?
      "Text long enough" : "Text too short"
    }
    </p>
    </div>
  )
}

export default ValidationComponent;
