import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { 'name': 'Suara', 'age': 20 },
      { 'name': 'Luna', 'age': 24 },
      { 'name': 'Siy', 'age': 21 }
    ],
    otherState : 'some other value'
  }

  switchNameHandler = ( newName, newAge ) => {
    // console.log("was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = 'Sidiq Indrajati Yusuf';
    this.setState( {
      persons : [
        { 'name': newName, 'age': newAge },
        { 'name': 'Blanc Luna', 'age': 24 },
        { 'name': 'Suara', 'age': 22 }
      ]
    } );
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { 'name': 'Suara', 'age': 20 },
        { 'name': event.target.value, 'age': 24 },
        { 'name': 'Siy', 'age': 21 }
      ]
    } );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'am React App!</h1>
        <p>This is really working!</p>
        
        {/* by using () => this.eventHandler(data) be aware this can be inefficient  */}
        {/* using this.eventHandler.bind(this, data) instead */}

        <button
          onClick={() => this.switchNameHandler('Suara!', 21)}>
          Switch name
        </button>
        
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Suara!!', 22)}
          changed={this.nameChangedHandler}>
            <p>Love Daikon (radish) love</p>
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;
