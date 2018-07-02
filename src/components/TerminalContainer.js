import React, { Component } from 'react';
import Terminal from 'react-bash';

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
        />
      </div>
    );
  }
  
}

export default TerminalContainer;