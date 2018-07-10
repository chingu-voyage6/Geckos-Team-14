import React, { Component } from 'react';

class BeerCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      {if(this.props.beerData === undefined) {
        return null;
        // (
        //   <div className="cell small-4 card">
        //   <img className="thumbnail beer-card__img" src="" alt="" />
        //   <div className="card-section">
        //     <h4 className="text-center">{this.props.BeerData.beer.name}</h4>
        //     <a href="">{this.props.BeerData.beer.website}</a>
        //     <p>{this.props.BeerData.beer.brewery}</p> 
        //   </div>
        // </div>
        //);
      } else {
        return(
        <div className="cell small-4 card">
          <img className="thumbnail beer-card__img" src="" alt="" />
          <div className="card-section">
            <h4 className="text-center">Beer Name</h4>
            <a href="">This is a test link</a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula mi quis venenatis vulputate. Fusce eu diam efficitur arcu fermentum luctus at id mi. Quisque molestie venenatis mauris. Aliquam id lacinia nisi. Integer gravida enim sapien, in vehicula tortor ultrices sed. Duis in quam eget purus sagittis dapibus vel sit amet libero.</p> 
          </div>
        </div>
        ); 
      }
    }
  }
}

export default BeerCard;