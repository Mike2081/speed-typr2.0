import React, { Component } from 'react'
import '../Styles/Start.scss';
import { Link } from 'react-router-dom';
export default class Start extends Component {
  render() {
    return (
      <div className='box'>
            <Link to={'/page'}>
                <button className='start'>
                    Start
                </button>
            </Link>
            <Link to={'/how-to-play'}>
                <button className='how'>
                    How to play
                </button>
            </Link>
            <div className='title'>
                Speed Typr
            </div>
            <div className='background'></div>
      </div>
    )
  }
}
