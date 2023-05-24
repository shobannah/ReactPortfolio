import React from 'react';
import '../../styles/img.css';
import reciBeet from "../../assets/images/reciBeet.png";
import BeatsAndEats from "../../assets/images/BeatsAndEats.png";
import about from '../../assets/images/About.gif'
import portfoliogif from '../../assets/images/Portfolio.gif'
import PlushiNet from '../../assets/images/plushigif.gif'

export default function Portfolio() {
  return (
  <div>
    <div className='aboutcolor'>
      <img 
        className={'img-about'}
        src={about} alt="profile pic" />
    </div>

    <div>  
      <img 
      className={'img-portfolio'}
      src={portfoliogif} alt="portfolio pic" />
    </div>

    <div class="cardflex row">
       
      <div className="card col-5">
          <a href="https://shobannah.github.io/BeatsAndEats/" target="_blank">
              <h5>BEETS & EATS BUILD</h5>
          </a>
          <img className='cardimg' src={BeatsAndEats} alt="BeatsAndEats pic" />
      </div>
      
      <div className="card col-5">
          <a href="https://recibeet-2.herokuapp.com/" target="_blank">
              <h5>ReciBEET</h5>
          </a>
          <img className='cardimg'src={reciBeet} alt="reciBeet" />
      </div>

      <div className="card col-5">
          <a href="https://plushinet.herokuapp.com" target="_blank">
              <h5>PlushiNet</h5>
          </a>
          <img className='cardimg' src={PlushiNet} alt="reciBeet" />
      </div>     

    </div>
  </div>
  );
}
