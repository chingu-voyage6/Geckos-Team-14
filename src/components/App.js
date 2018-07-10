import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BeerCard from './BeerCard';
import NPMCard from './NPMCard';

import TerminalContainer from './TerminalContainer';
class App extends Component {
  constructor(props) {
    super(props);
    this.updateBeerData = this.updateBeerData.bind(this);
    this.state = {
      beerData: ''
    }
  }
  updateBeerData(data) {
    this.setState(() => {
      return {
        beerData: data
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <BeerCard beerData={this.beerData}/>
              <div className="cell small-2"><p className="plus-sign">+</p></div>
              <NPMCard />
           </div>
          </div>
            <TerminalContainer updateBeerData={this.updateBeerData} />
      </div>
    );
  }
}

export default App;
