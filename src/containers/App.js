import './App.css';
import React, { Component } from 'react';
import {Persons} from "./../components/Persons/Persons.js"
import Radium from "radium";
import  Cockpit from "./../components/Cockpit/Cockpit.js"


 export class App extends Component {
	state = {
			  persons: [
				{id: "sfaas22", name: "Andry", age: 20},
				{id: "sdafe33", name: "Emma", age: 25},
				{id: "asdfsda1" , name: "Anna", age: 46},
				{id: "d45f1a1", name: "Max", age: 16}],
				otherState: 'some other value',
				showPersons: false
			}

	  nameChangedHandler = (event, id) => {
		const personsId = this.state.persons.findIndex( (arr) => { return arr.id === id  }   );
		//  debugger;
		//создаем новый объект с помощью оператора расширения rest
		const personToChange = {...this.state.persons[personsId]};
		personToChange.name = event.target.value;
		const  personsNewCopy = [...this.state.persons]
		personsNewCopy[personsId] = personToChange;

		this.setState( { persons: personsNewCopy} )
	  }

	  deletePersonHandler = (personIndex) => {
		//const personsToChange= this.state.persons.slice(); 
		const personsToChange= [...this.state.persons];
		personsToChange.splice(personIndex, 1)
		this.setState({persons: personsToChange})
	  }

	  togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	  }

	   styleEl = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
                ":hover": { backgroundColor: "lightgreen", color: "black"}
		}
	  
		render () {
		

let persons = null;

// debugger;
if (this.state.showPersons) {
	persons = (
		<div>
			<Persons  persons= {this.state.persons} 
					  clicked = {this.deletePersonHandler} 
					  changed = {this.nameChangedHandler} 
			/>
        </div>
	);
}
	return (
		<div className="App">
			<Cockpit 
			persons = {this.state.persons}
			togglePersonsHandler = {this.togglePersonsHandler} 	
			styleEl = {this.styleEl}
			showPersons = {this.state.showPersons}
			/>
			{ persons }
		</div>
	)
}	
}

export default Radium(App);