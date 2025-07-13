import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import Myprojects from '../Myprojects/Myprojects';

const Projects = () => {
  const client_projects = [
    {
      img: 'https://market-resized.envatousercontent.com/previews/files/213374402/cover.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=81f30d320809c133b6196e6e7b61a195b0515f2a2fb9547e1878cfead6b29a43',
      title: 'SEEDS',
      desc:
        'SEEDS is an innovative agriculture platform designed to support modern farming practices. It offers insights into seed types, crop growth, soil health, and sustainable farming methods.',
      link: 'https://farming-new.vercel.app/',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOa1b5ROEFjhZRSCLdLR3Ono2C9FXA1iu5A&s',
      title: 'KANNAN FARMING',
      desc: 'Kannan Farming is a modern agricultural platform focused on promoting sustainable farming practices, crop planning, and resource management to help farmers improve yield and productivity.',
      link: 'https://kannan-farming.vercel.app/',
    },

    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXElrOchgwWTef2ut0nAPrH94dgly4B_N2zQ&s',
      title: 'DESSERT DREAM CAKES',
      desc:
        'From birthday cakes to brownies, we bake with love and the finest ingredients.',
      link: 'https://cakeshop-website.vercel.app/',
    },
   {
      img: 'https://www.edecofy.com/blog/wp-content/uploads/2021/03/Student-Attendance-Automation-1024x538.png',
      title: 'STUDENT ATTENDANCE SYSTEM',
      desc: 'A web-based application to manage and track student attendance efficiently. It allows teachers to mark presence, view attendance history, and generate reports with ease.',
      link: 'https://github.com/Pradeep-pmk/crud',
    }

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

