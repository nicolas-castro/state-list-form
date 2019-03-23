import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter'
import StudentList from './components/StudentsList'
import ProductList from './components/ProductsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
        <StudentList />
        <ProductList />
      </div>
    );
  }
}

export default App;
