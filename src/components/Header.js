import React from 'react';
import logo  from '../logo.svg'
import './Header.css'
import Title from './Title'

const header = () => {
  return (
    <header>
        <img src={logo} alt="react-logo" className="App-logo" />
        <Title message="My first create-react-app" />
    </header>
  )
}

export default header;