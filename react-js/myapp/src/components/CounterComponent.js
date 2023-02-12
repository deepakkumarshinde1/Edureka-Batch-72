import { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start,
    };
  }
  incCount = () => {
    this.setState((oldState) => ({ ...oldState, count: oldState.count + 1 }));
  };

  // load
  componentDidMount() {
    console.log("class component mounted");
  }

  // update
  componentDidUpdate() {
    console.log("class component updated");
  }

  //unload
  componentWillUnmount() {
    console.log("class component unmount");
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.incCount}>Class Inc Counter</button>
      </>
    );
  }
}

export default CounterComponent;
