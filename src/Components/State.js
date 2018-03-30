import React from "react";
import Component from "react-dom";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "This is the state component text",
      cat: 0
    };
  }
  update(e) {
    this.setState({ txt: e.target.value });
  }

  increase(e) {
    this.setState({ cat: e.target.value++ });
  }

  render() {
    return (
      <div>
        <h1>This is a state Component testing.</h1>
        <h2>This is heading two</h2>
        <h3>
          {this.state.txt} - - {this.state.cat}
        </h3>
        <input type="text" onChange={this.update.bind(this)} />
        <div>
          <button onClick={this.increase.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

export default State;
