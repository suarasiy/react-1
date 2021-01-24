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
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName, newAge ) => {
    // console.log("was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = 'Sidiq Indrajati Yusuf';
    this.setState({
      persons : [
        { 'name': newName, 'age': newAge },
        { 'name': 'Blanc Luna', 'age': 24 },
        { 'name': 'Suara', 'age': 22 }
      ]
    });
  }

  nameChangedHandler = ( event ) => {
    this.setState({
      persons: [
        { 'name': 'Suara', 'age': 20 },
        { 'name': event.target.value, 'age': 24 },
        { 'name': 'Siy', 'age': 21 }
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name}
            age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'am React App!</h1>
        <p>This is really working!</p>
        
        {/* by using () => this.eventHandler(data) be aware this can be inefficient  */}
        {/* using this.eventHandler.bind(this, data) instead */}

        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App;
