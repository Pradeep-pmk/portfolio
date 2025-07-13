import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import "./App.css";
import ExprienceContainer from './components/ExprienceContainer/ExprienceContainer';
import Contact from './components/Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <TopContainer />
    <Skills/>
    <Projects/>
    <ExprienceContainer/>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
