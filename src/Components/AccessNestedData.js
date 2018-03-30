import React from "react";
import Component from "react-dom";

class AccessNestedData extends React.Component {
  render() {
    return (
      <div>
        <h1>Access Nested Data with React Props.children</h1>
        <h2>Exercises</h2>
        <Button color="primary">
          I <Heart /> React
        </Button>
      </div>
    );
  }
}

const Button = props => <button>{props.children}</button>;

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>;
  }
}
export default AccessNestedData;
