import React from 'react';
import '../../styles/img.css';
import profilepic from "../../assets/images/profilepic.jpg";


export default function AboutMe() {
  return (
    <div
    className={'m-5 text-center'}
    >
      <h1>About Me</h1>
      
      <p
      className={'m-5'}
      >
      My name is Shobannah Ally and I am currently a student in the UCF Part Time Coding Bootcamp that meets Monday, Tuesday and Thursday virtually. I am looking for a career change from working in finance to entering the coding world. I feel as if I had no definite career path in finance and there was no where to go up from the position that I held. I am looking forward to learning more about this field and to grow into a great coder one day.
      </p>

      <img 
      className={'img-thumbnail'}
      src={profilepic} alt="profile pic" />
    </div>
    
  );
}
