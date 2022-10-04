import React from 'react';
import "../App.css";

const Square = ({val, chooseSqaure}) => {
  return (
    <div  className="square" onClick={chooseSqaure}>
       {val}  
    </div>
  )
}

export default Square