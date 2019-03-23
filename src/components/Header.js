import React from 'react';
import logo  from '../logo.svg'
import './Header.css'

const header = () => {
  return (
    <header>
        <img src={logo} alt="react-logo" className="App-logo" />
        <h1>My First create-react-app</h1>
    </header>
  )
}

export default header;