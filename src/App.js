import React from "react";
import Stateless from "./Components/Stateless";
import State from "./Components/State";
import ChildToParent from "./Components/ChildToParent";
import AccessNestedData from "./Components/AccessNestedData";
import SythenticEvent from "./Components/SythenticEvent";
import Custom from "./Components/Custom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Stateless txt="this is a prop text" cat="200" name="designer Won " />
        <div>
          <State />
        </div>
        <div>
          <ChildToParent />
        </div>
        <div>
          <AccessNestedData />
        </div>
        <div>
          <Custom />
        </div>
        <div>
          <SythenticEvent />
        </div>
      </div>
    );
  }
}

// const App = () => <div>Hello, this is a Stateless Component</div>;

export default App;
