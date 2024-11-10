import React from "react";
import { Button } from "react-bootstrap";
import Child from "../Children";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  toggleChildren() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.toggleChildren.bind(this)}>
          {this.state.toggle ? "Hello" : "Bye"}
        </Button>
        {this.state.toggle && <Child />}
      </>
    );
  }
}

export default Parent;
