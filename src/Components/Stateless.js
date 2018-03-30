import React from "react";
import Component from "react-dom";

class Stateless extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    let name = this.props.name;
    return (
      <div>
        <h1>Hello, this is a State Component</h1>
        <b>This is BOLD</b>
        <h2>
          {txt} & <br />
          {cat}
        </h2>
        <h3>{name}</h3>
      </div>
    );
  }
}

// const Stateless = () => <div>Hello, this is a Stateless Component</div>;

export default Stateless;
