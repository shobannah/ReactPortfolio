import React from 'react';
import '../../styles/img.css';
import reciBeet from "../../assets/images/reciBeet.png";
import BeatsAndEats from "../../assets/images/BeatsAndEats.png";
import about from '../../assets/images/About.gif'
import portfoliogif from '../../assets/images/Portfolio.gif'
import PlushiNet from '../../assets/images/plushigif.gif'
import { Col, Row } from 'antd';


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

    <Row class="cardflex">
       
      <Col className="card"
      xs={{ span: 20 }}
      sm={{ span: 12 }}
      md={{ span: 7 }}
      lg={{ span: 5 }}
      xl={{ span: 7 }}>
          <a href="https://shobannah.github.io/BeatsAndEats/" target="_blank" rel="noreferrer">
              <h5>BEETS & EATS</h5>
          </a>
          <img className='cardimg' src={BeatsAndEats} alt="BeatsAndEats pic" />
      </Col>
      
      <Col className="card"
      xs={{ span: 20}}
      sm={{ span: 12 }}
      md={{ span: 7 }}
      lg={{ span: 5 }}
      xl={{ span: 7 }}>
          <a href="https://recibeet-2.herokuapp.com/" target="_blank" rel="noreferrer">
              <h5>ReciBEET</h5>
          </a>
          <img className='cardimg'src={reciBeet} alt="reciBeet" />
      </Col>

      <Col className="card"
      xs={{ span: 20 }}
      sm={{ span: 12 }}
      md={{ span: 7 }}
      lg={{ span: 5 }}
      xl={{ span: 7 }}>
          <a href="https://plushinet.herokuapp.com" target="_blank" rel="noreferrer">
              <h5>PlushiNet</h5>
          </a>
          <img className='cardimg' src={PlushiNet} alt="reciBeet" />
      </Col>     

    </Row>
  </div>
  );
}
