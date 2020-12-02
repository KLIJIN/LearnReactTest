import './App.css';
import React, { Component } from 'react';
import {Person} from "./Person/Person"


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

	

	// const [otherState] = useState({ sex: "yes"});
	// 		console.log(personsState, otherState);

	//  switchName = () => {
	// 		this.setState({
	// 			persons: [
	// 			{name: "Max", age: 20},
	// 			{name: "ads", age: 25},
	// 			{name: "Emma", age: 46},
	// 			{name: "Anna", age: 16}]
	// 		})
	//   }

	  nameChangedHandler = (event, id) => {
		const personsId = this.state.persons.findIndex( (arr) => { return arr.id === id  }   );
		// debugger;
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

		// debugger;
		render () {
			
const styleEl = {
	backgroundColor: "white",
	font: "inherit",
	border: "1px solid blue",
	padding: "8px"
}

let persons = null;
console.log(persons);
console.log(this.state.showPersons);
// debugger;
if (this.state.showPersons) {
	persons = (
		<div>
			{this.state.persons.map( (person, index) => {
				return 		<Person click = { () => this.deletePersonHandler(index) } //стрелочная функция внутри параметра - альтернатива байнду функции. 
									name = {person.name}
									age = {person.age} 
									key = {person.id}
									changed = { (event) => this.nameChangedHandler(event, person.id) }
							/>
			} )}
        </div>
	// <div>
	// 	{/* в первой строке мы прокидываем функцию, в проперти дочернего елемента	 */}
	// 	<Person clickProperty =  { this.switchName }  name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
	// 	<Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} chaged = { this.nameChangedHandler} /> 
	// 	<Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
	// 	<Person name = {this.state.persons[3].name} age = {this.state.persons[3].age} />
	// </div>
	
	);
	console.log(persons);
}
	return (
		<div className="App">
				<div>
					<button style ={styleEl} 
						onClick  = { this.togglePersonsHandler }
					>Переключалка Имен</button>
				</div >	

				{ persons }
		</div>
	)
}	
}
