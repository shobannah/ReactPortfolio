import React from 'react';
import resume from '../../assets/images/resume.png';
import resumegif from '../../assets/images/Resume.gif';

export default function Resume() {

  return (
    <div>
      <div>  
          <img 
          className={'img-resume'}
          src={resumegif} alt="resumegif pic" />
      </div>

      <img className='resume'
        src={resume} alt="profile pic" />
    </div>
  );
}
