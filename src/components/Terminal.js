import React, { Component } from 'react';

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.processCommand = this.processCommand.bind(this);
    this.hello = this.hello.bind(this);
    this.state = {
      history: []
    }

  }
  /**
   * @function processCommand
   * @param {event} onKeyDown
   * This method will take the value of the .input span that will then be used to process
   * commands 
   */
  processCommand(event) {
    let input = event.target.textContent;
    if(event.key === 'Enter') {
      console.log(`processCommand triggered ${input}`);
      this.setState((prevState) => {
        return {
          history: prevState.history.concat(input)
        };
      });
      if (input === 'hello') {
        this.hello();
      }
    }
  }
  /**
   * @function hello
   * Simple test command that is run when the user types hello
   */
  hello() {
    const terminal = document.querySelector(".history");
    terminal.textContent = "Hello user!";
    console.log(`Hello user!`);
  }

  render() {
    return(
      <section className="grid-y terminal__container">
        <div className="cell large-8" id="terminal">
          <div className="history"></div>
          <div className="terminal__row"><span>></span><span contentEditable="true" className="input" onKeyDown={this.processCommand}> </span></div>
        </div>
      </section>
    );
  }
}

export default Terminal;