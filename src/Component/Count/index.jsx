import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, groupSize: 0 };
  }

  onIcrease = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
    this.props.handleChange(-1);
  };

  onDcrease = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));

    this.props.handleChange(1);
  };

  // static getDerivedStateFromProps(props, state) {
  //   if (props.groupSize !== state.groupSize) {
  //     return {
  //       value: 0,
  //       groupSize: props.groupSize,
  //     };
  //   }
  //   return null;
  // }

  static componentWillMount(props,state) {
      this.props.handleChange(state.value);
  }

  render() {
    return (
      <div>
        <button onClick={this.onDcrease}>-</button>
        <mark>{this.state.value}</mark>
        <button onClick={this.onIcrease}>+</button>
      </div>
    );
  }
}

export default Counter;
