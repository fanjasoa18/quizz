import React from 'react';
import { Link } from 'react-router-dom';
import welcome1 from '../pics/Welcome1.png';

const WelcomePage = () => {
    
  return (
    <div className='body'>  
      <div className='app'>
          <div className='welcome'>
            <img src={welcome1} className='welcome_img' alt=""/>
            <div className='start_section'>
              <button type="submit" className='button_start' id='fourth' ><Link to="/home" className='link'>API</Link></button>
              <button type="submit" className='button_start' id='third' ><Link to="/home" className='link'>REACT</Link></button>
              <button type="submit" className='button_start' id='second' ><Link to="/home" className='link'>JS</Link></button>
              <button type="submit" className='button_start' id='first' ><Link to="/home" className='link'>JAVA</Link></button>
            </div> 
          </div>
      </div>
    </div>
  )
}

export default WelcomePage;