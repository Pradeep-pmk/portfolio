import React from 'react';
import "./Contact.css";
import { Element } from 'react-scroll';
import { IconButton } from '@mui/material';
import { LinkedIn, Facebook, Instagram } from '@mui/icons-material';

const Contact = () => {
  return (
    <Element name="contact" className='contact'>
      <h1>Contact</h1>
      <div className='contact__container'>
        <p>Email : <span>pradeep2732003@gmail.com</span></p>
        <p>Github Username : <span>pradeeppmkpmk</span></p>
        <div className='contact__icon'>
          <a href='https://www.instagram.com/07_pradeep_offi?igsh=MXhzdThtbmoyYnBlaA==' target="_blank" rel="noopener noreferrer">
              <IconButton>
                <Instagram />
              </IconButton>
          </a>
          <a href='https://www.facebook.com/share/15CJcXcRpo/' target="_blank" rel="noopener noreferrer">
          <IconButton>
              <Facebook />
          </IconButton>
          </a>
          <a href='https://www.linkedin.com/in/pradeep-k-61a742285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer">
              <IconButton>
                  <LinkedIn />
              </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
