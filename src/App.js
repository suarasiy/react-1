import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // LIST: List of persons
  state = {
    persons : [
      { 'id': 'sjds1', 'name': 'Suara', 'age': 20 },
      { 'id': 'sjfj1', 'name': 'Luna', 'age': 24 },
      { 'id': 'sjdh1', 'name': 'Siy', 'age': 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // NOTE: nameChangedHandler
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // ALTERNATIVE: mutate object with assign
    // const person = Object.assign({}, this.state.persons[personIndex]);
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({ persons: persons });
  }

  // NOTE: togglePersonHandler
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  // NOTE: deletePersonHandler
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid transparent',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      outline: 'none',
      borderRadius: '4px',
      boxShadow: '0 4px 8px .12px rgba(0, 0, 0, 0.25)'
    };

    let persons = null;
    // :CURRENT: current work line
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name}
            age={person.age}
            key={person.id}
            click={this.deletePersonHandler.bind(this, index)}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      style.backgroundColor = 'red';
    }
    
    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push("red");
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'am React App!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        
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
