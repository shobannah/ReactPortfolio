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

    <div class="row">
       
      <div className="card col-lg-5 col-md-5 col-xs">
          <a href="https://shobannah.github.io/BeatsAndEats/" target="_blank" rel="noreferrer">
              <h5 className='titlename'>BEETS & EATS</h5>
          </a>
          <img className='cardimg' src={BeatsAndEats} alt="BeatsAndEats pic" />
      </div>
      
      <div className="card col-lg-5 col-md-5 col-xs">
          <a href="https://recibeet-2.herokuapp.com/" target="_blank" rel="noreferrer">
              <h5 className='titlename'>ReciBEET</h5>
          </a>
          <img className='cardimg'src={reciBeet} alt="reciBeet" />
      </div>

      <div className="card col-lg-5 col-md-5 col-xs">

          <a href="https://plushinet.herokuapp.com" target="_blank" rel="noreferrer">
              <h5 className='titlename'>PlushiNet</h5>
          </a>
          <img className='cardimg' src={PlushiNet} alt="reciBeet" />
      </div>     

    </div>
  </div>
  );
}
