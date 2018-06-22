import React, { Component } from 'react';

class NPMCard extends Component {
  render() {
    return (
      <div className="cell small-4 card">
        <h2 className="text-center npm-card__title">Library Name</h2>
        <div className="card-section">
          <p className="npm-card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula mi quis venenatis vulputate.</p>
          <div className="large button-group npm-card__buttons">
            <button className="button">Website</button>
            <button className="button">Github</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NPMCard;