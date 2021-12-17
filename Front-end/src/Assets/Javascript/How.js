import React, { Component } from 'react';
import '../Styles/How.scss';
import { Link } from 'react-router-dom';
export default class How extends Component {
  render() {
    return (
      <div>
        <Link to={'/start'}>
          <button className='home'>
            Home
          </button>  
        </Link>  
        <div className='how-title'>
          How to play
        </div>
        <div className='info'>
          After hitting the start button. Click on the white 
          text bar and type the words falling from the screen as fast 
          as you can!
        </div>
        <div className='color'></div>
      </div>
    )
  }
}
