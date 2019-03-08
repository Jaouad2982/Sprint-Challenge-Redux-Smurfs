import React, { Component } from "react";
import "./App.css";
import Smurf from "./Smurf";
import { getData, addSmurf, deleteSmurf, updateSmurf } from "../actions";
import { connect } from "react-redux";

import Form from "./Form";

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => (
          <Smurf
            updateSmurf={this.props.updateSmurf}
            id={smurf.id}
            key={smurf.name}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
            deleteSmurf={this.props.deleteSmurf}
          />
        ))}
        <Form
          onChange={this.onchange}
          state={this.state}
          addSmurf={this.props.addSmurf}
        />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getData, addSmurf, deleteSmurf, updateSmurf }
)(App);