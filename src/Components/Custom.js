import React from "react";
import Component from "react-dom";

class Custom extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom PropType Validation Exercise</h1>
        <h3>Exercise below</h3>
        <Title text="The Title" />
      </div>
    );
  }
}

const Title = props => <h1>Title:{props.text}</h1>;

Title.prototypes = {
  text(props, propsName, Component) {
    if (!(propsName in props)) {
      return new Error(`missing ${propsName}`);
    }
    if (props[propsName].length < 6) {
      return new Error(
        `${propsName}of the length is less than 6 and it's too short`
      );
    }
  }
};

export default Custom;
