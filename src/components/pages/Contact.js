import React from 'react';
import contact from '../../assets/images/Together.gif'
import '../../styles/img.css';


export default function Contact() {

return (
  <div>
    <div>  
        <img 
        className={'img-portfolio'}
        src={contact} alt="contact pic" />
    </div>

    <div className='row'>

      <div className='links col-lg-4 col-md-4 col-xs'>
        <h5 className='titlename'><a href="mailto:shobannah@gmail.com" target="_blank">Email Me!</a></h5>
      </div>

      <div className='links col-lg-4 col-md-4 col-xs'>
        <h5 className='titlename'><a href="tel:407-748-8015" target="_blank">Call Me!</a></h5>
      </div>

      <div className='links col-lg-4 col-md-4 col-xs'>
        <h5 className='titlename'><a href="https://www.linkedin.com/in/shobannah-ally/" target="_blank">Linked In</a></h5>
      </div>
    </div>

  </div>
  );
}

