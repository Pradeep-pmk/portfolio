import React from 'react'
import "./Skills.css";
import { Element } from 'react-scroll'
import skilling from "../../assets/four.png"
import LinearProgress from '@mui/material/LinearProgress';


const Skills = () => {
  return (
    <Element name='skills' className='skillContainer'>
        <div className='skillcontainer__image'>
            <img src={skilling} alt='' />
        </div>
        <div className='skillcontainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillcontainer__skillSet'>
                <h5>Html</h5>
                <div className='skillcontainer__slider skillcontainer__slider1'>
                    <LinearProgress variant="determinate"  value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Css</h5>
                <div className='skillcontainer__slider skillcontainer__slider2'>
                    <LinearProgress variant="determinate" value={80}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Bootstrap</h5>
                <div className='skillcontainer__slider skillcontainer__slider3'>
                    <LinearProgress variant="determinate" value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Javascript</h5>
                <div className='skillcontainer__slider skillcontainer__slider4'>
                    <LinearProgress variant="determinate" value={60}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Php</h5>
                <div className='skillcontainer__slider skillcontainer__slider5'>
                    <LinearProgress variant="determinate" value={60}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>React Js</h5>
                <div className='skillcontainer__slider skillcontainer__slider6'>
                    <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Node Js</h5>
                <div className='skillcontainer__slider skillcontainer__slider7'>
                    <LinearProgress variant="determinate" value={60}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Mysql</h5>
                <div className='skillcontainer__slider skillcontainer__slider8'>
                    <LinearProgress variant="determinate" value={80}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Laravel</h5>
                <div className='skillcontainer__slider skillcontainer__slider9'>
                    <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Figma</h5>
                <div className='skillcontainer__slider skillcontainer__slider10'>
                    <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>
            <div className='skillcontainer__skillSet'>
                <h5>Photoshop</h5>
                <div className='skillcontainer__slider skillcontainer__slider11'>
                    <LinearProgress variant="determinate" value={50}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skills