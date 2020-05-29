import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClick = (event) => {
    this.props.increaseCount();
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

// outside of the App component
// state coming from the Redux store
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

// dispatch comes from Redux store
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch({ type: "INCREASE_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
