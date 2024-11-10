import React from "react"
import Parent from "./components/Parent";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    return(
      <Parent />
    )
  }
}

export default App;
