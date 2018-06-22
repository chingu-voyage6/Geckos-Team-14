import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BeerCard from './BeerCard';
import NPMCard from './NPMCard';
import Terminal from './Terminal';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <BeerCard />
              <div className="cell small-2"><p className="plus-sign">+</p></div>
              <NPMCard />
           </div>
          </div>
            <Terminal />
      </div>
    );
  }
}

export default App;
