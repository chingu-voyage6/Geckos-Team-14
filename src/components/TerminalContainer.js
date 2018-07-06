import React, { Component } from 'react';
import Terminal from 'react-bash';
const history = [
  { value: 'Welcome to NPMInstallBeer!'},
  { value: 'Type \'help\' to begin.'}
]
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

const extensions = { hello };


class TerminalContainer extends Component {
  
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