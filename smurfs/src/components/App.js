import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addSmurf } from '../actions';
import SmurfList from './SmurfList'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: ''
    }

    this.handleChanges = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }

    this.addNewSmurf = () => {
      const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      this.props.addSmurf(newSmurf)
      this.setState({
        name: '',
        age: '',
        height: ''
      })
    }

  }
  render() {
    return (
      <div className="App">
        <SmurfList /> 
        <form onSubmit={this.addNewSmurf}>
          <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChanges} />
          <input placeholder="Age" name="age" value={this.state.age} onChange={this.handleChanges} />
          <input placeholder="Height" name="height" value={this.state.height} onChange={this.handleChanges} />
          <button>Submit New Smurf</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { addSmurf })(App);
