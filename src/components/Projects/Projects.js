import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import Myprojects from '../Myprojects/Myprojects';

const Projects = () => {
  const client_projects = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXElrOchgwWTef2ut0nAPrH94dgly4B_N2zQ&s',
      title: 'DESSERT DREAM CAKES',
      desc:
        'At Sweet Cravings, we believe every occasion deserves a delicious celebration. From elegant birthday cakes and tiered wedding masterpieces to bite-sized cupcakes and rich brownies, we bake with love, creativity, and the finest ingredients.',
      link: 'https://cakeshop-website.vercel.app/',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXElrOchgwWTef2ut0nAPrH94dgly4B_N2zQ&s',
      title: 'DESSERT DREAM CAKES',
      desc:
        'From birthday cakes to brownies, we bake with love and the finest ingredients.',
      link: 'https://cakeshop-website.vercel.app/',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXElrOchgwWTef2ut0nAPrH94dgly4B_N2zQ&s',
      title: 'DESSERT DREAM CAKES',
      desc:
        'From birthday cakes to brownies, we bake with love and the finest ingredients.',
      link: 'https://cakeshop-website.vercel.app/',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXElrOchgwWTef2ut0nAPrH94dgly4B_N2zQ&s',
      title: 'DESSERT DREAM CAKES',
      desc:
        'From birthday cakes to brownies, we bake with love and the finest ingredients.',
      link: 'https://cakeshop-website.vercel.app/',
    },
  ];

  return (
    <Element className='projectsContainer' name='projects'>
      <h1>Projects</h1>
      <p>Here are some projects I built to make life easier and more delicious.</p>
      <div className='projectsContainer__projects'>
        {client_projects.map((project, index) => (
          <Myprojects
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
};

export default Projects;

