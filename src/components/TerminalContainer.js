import React, { Component } from 'react';
import Terminal from 'react-bash';
const history = [
  { value: 'Welcome to NPMInstallBeer!'},
  { value: 'Type \'help\' to begin.'}
]
let data = {};

function requestData(tech) {
  console.log(tech);
  fetch('http://www.mocky.io/v2/5b43c2972f000075005834d5')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      data = myJson;
      console.log(data);
    });
}

export const hello = {
    exec: (state, {args}) => { 
      let value = '';
      if (args[0] != undefined) {
        const name = args[0];
        value = `Hello ${name}!`;
      }
      else { 
        value = 'Hello Visitor!';
      }
      return Object.assign({}, state, {
        history: state.history.concat({value})
        });
    }
};

export const pull = {
  exec: (state, {args}) => {
    const tech = args[0];
    requestData(tech);
    return Object.assign({}, state, {
      history:state.history.concat({tech})
    });
  }
};

const extensions = { hello, pull };


class TerminalContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    this.props.updateBeerData(data); 
  }
  render() {
    return(
      <div className="terminal__container">
        <Terminal 
          styles={{
            ReactBash: {
              fontSize: '25px',
              color: '#11b224',
              height: '40vh',
              overflowY: 'scroll',
              padding: '10px'
            },
            body: {
              backgroundColor: '#000',
              
            },
            prefix: {
              color: '#11b224',
              marginRight: '5px'
            },
            header: {
              display: 'none'
            }
          }} 
          prefix={'beerlover@root'} 
          theme={Terminal.Themes.DARK}
          history={history}
          extensions = {extensions}
        />
      </div>
    );
  }
  
}

export default TerminalContainer;