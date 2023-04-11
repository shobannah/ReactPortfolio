import React from 'react';
import '../../styles/img.css';
import portfolio from "../../assets/images/portfolio-screenshot.png";
import horiseon from "../../assets/images/horiseon.png";
import studyguide from "../../assets/images/studyguide.jpg";
import reciBeet from "../../assets/images/reciBeet.png";
import BeatsAndEats from "../../assets/images/BeatsAndEats.png";

export default function Portfolio() {
  return (
    <div
    className={'m-5'}
    >
      <h1>Portfolio</h1>

      <div class="text-center">

                <div className="card border-warning m-2 p-3 w-50">
                    <a href="https://shobannah.github.io/shobannahallyportfolio/" target="_blank"
                    className='row'>
                        <h5 className="btn btn-outline-dark rounded-pill m-2 text-danger col">PORTFOLIO</h5>
                        <img
                        className='col' 
                        src={portfolio} alt="portfolio pic" />
                    </a>
                </div>
                <div className="card border-warning m-2 p-3 w-50">
                    <a href="https://shobannah.github.io/BeatsAndEats/" target="_blank"
                    className='row'>
                        <h5 className="btn btn-outline-dark rounded-pill m-2 text-danger col">BEETS & EATS BUILD</h5>
                        <img 
                        className='col'
                        src={BeatsAndEats} alt="BeatsAndEats pic" />
                    </a>
                </div>
                <div className="card border-warning m-2 p-3 w-50">
                    <a href="https://shobannah.github.io/horiseon/" target="_blank" className='row'>
                        <h5 className="btn btn-outline-dark rounded-pill m-2 text-danger col">HORISEON BUILD</h5>
                        <img
                        src={horiseon} alt="horiseon pic" />
                    </a>
                </div>
                <div className="card border-warning m-2 p-3 w-50">
                    <a href="https://shobannah.github.io/prework-study-guide/" target="_blank" className='row'>
                        <h5 className="btn btn-outline-dark rounded-pill m-2 text-danger col">STUDY GUIDE BUILD</h5>
                        <img
                        src={studyguide} alt="study guide pic" />
                    </a>
                </div>
                <div className="card border-warning m-2 p-3 w-50">
                    <a href="https://recibeet-2.herokuapp.com/" target="_blank" className='row'>
                        <h5 className="btn btn-outline-dark rounded-pill m-2 text-danger col">ReciBEET</h5>
                        <img 
                        src={reciBeet} alt="reciBeet" />
                    </a>
                </div>
                             

            </div>
    </div>
  );
}
