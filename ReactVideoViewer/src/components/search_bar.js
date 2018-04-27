//user types input, this component makes a request to the youtube search api
import React, { Component } from 'react';

//State is a plain Javascript object that is used to record and react to user events
//functional components do not have states. Only class-based components do!

//add an input field component
class SearchBar extends Component{
	//a constructor function is used to initialize variables and states inside a class. It is immediately called.
	constructor(props){
		//calling the parent method with super. Parent is Component
		super(props);
		//initializing state to blank. this.state is an initialized object.
		//term is a property of state. Only update state this way inside a constructor function
		this.state = { term: '' };
	}

	//this is a function. Every class must have a render function. Render function must return some JSX
	//update the state here inside an event handler with this.setState()
	render() {
		return (
			<div>
			<input onChange={ (event) => this.setState({ term: event.target.value })} />
			<br></br>
			Value of input: {this.state.term}
			</div>
		);
		
	}

}

//tells React to export the SearchBar component
export default SearchBar;


//old function-based component
//const SearchBar = () => {
//	return <input />
//};

//Old event handler function 
//onInputChange(event) {
	//console.log(event.target.value);
//	}

//By using arrow functions, we avoid having to type the function keyword, return keyword (it’s implicit in arrow functions), and curly brackets.
