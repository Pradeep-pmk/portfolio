import React from 'react'
import { Element } from 'react-scroll'
import "./TopContainer.css";
import TopContent from '../TopContent/TopContent';

const TopContainer = () => {
  return (
    <Element name='about' className='topcontainer'>
        <TopContent />
    </Element>
  )
}

export default TopContainer