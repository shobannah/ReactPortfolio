import React from 'react';
import '../../styles/img.css';
import name from '../../assets/images/Shobannah.gif'


export default function AboutMe() {
  return (
    <div>

    <div className='namecolor'>  
      <img 
      className={'img-name'}
      src={name} alt="profile pic" />
    </div>

    </div>
  );
}
