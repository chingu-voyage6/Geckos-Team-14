import React, { Component } from 'react';

class NPMCard extends Component {
  render() {
    return (
      <div className="cell small-6 card">
        <h2>Library Name</h2>
        <div className="card-section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula mi quis venenatis vulputate.</p>
          <button className="button">Website</button>
          <button className="button">Github</button>
        </div>
      </div>
    );
  }
}

export default NPMCard;