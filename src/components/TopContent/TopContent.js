import React from 'react'
import "./TopContent.css";
import { Link } from "react-scroll";

const TopContent = () => {
  return (
    <div className='topcontent'>
      <div className='topcontent__container'>
        <h1>Mr.Pradeep K</h1>
        <p>A Professional Web Developer and Software Developer.</p>

        <a href="/Pradeep.pdf" download>
          <button className='topcontent__downloadButton'>Download CV</button>
        </a>

        <Link to="projects" smooth={true} duration={500}>
          <button className='topcontent__myworkButton'>My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default TopContent;
