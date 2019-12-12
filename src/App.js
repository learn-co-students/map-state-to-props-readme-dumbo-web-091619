import React, { Component } from 'react';
import { Connect } from 'react-redux'
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
        <p>Just addin' a lil note here because git isn't recognizing my changes :\</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { items: state.items}
}

export default connect(mapStateToProps)(App);
