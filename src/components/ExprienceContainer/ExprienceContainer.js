import React from 'react'
import "./ExprienceContainer.css";
import { Element } from 'react-scroll'
import ExprienceBox from '../ExprienceBox/ExprienceBox';

const ExprienceContainer = () => {
  return (
    <div>
        <Element name="exp" className='exprienceContainer'>
            <h1>Exprience</h1>
            <div className='exprienceContainer__info'>
                <ExprienceBox number="+2" title="Clients"/>
                <ExprienceBox number="+2" title="Projects" style={{backgroundColor:"#f64c08"}}/>
                <ExprienceBox number="+6" title="Month Exprience"/>
            </div>
        </Element>
    </div>
  )
}

export default ExprienceContainer