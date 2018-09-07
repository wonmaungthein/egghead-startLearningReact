import React from "react";
import Component from "react-dom";

// class ChildToParent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "This is the state component text"
//     };
//   }

class ChildToParent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "This is my love letter",
      name: "Lucy",
      age: "55"
    };
  }

  update(e) {
    this.setState({
      text: e.target.value,
      name: e.target.value,
      age: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Updating Parent Component from Child Component</h1>
        <h2>This is component text.</h2>
        <div>{this.state.text}</div>
        <Wedges updateing={this.update.bind(this)} />
        <Wedges updateing={this.update.bind(this)} />
        <Wedges updateing={this.update.bind(this)} />
        <Wedges updateing={this.update.bind(this)} />
        <div>{this.state.name}</div>
        <ChangingName />
        <div>{this.state.age}</div>
      </div>
    );
  }
}

// creating a stateless function component

const Wedges = props => {
  return <input type="text" onChange={props.updateing} />;
};

const ChangingName = props => {
  return <input type="text" />;
};

const ChangingAge = props => {
  return <input />;
};
export default ChildToParent;
