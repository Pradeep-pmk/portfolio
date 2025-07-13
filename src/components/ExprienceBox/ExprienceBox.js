import React from 'react'
import "./ExprienceBox.css";

const ExprienceBox = ({number,title,style}) => {
  return (
    <div style={{...style}} className='exprience'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ExprienceBox