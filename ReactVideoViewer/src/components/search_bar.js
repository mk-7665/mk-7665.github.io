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
			<div className="search-bar">
			<input 
				//input is now a controlled component. this.state.term is the correct value of input element at any given time.
				value = {this.state.term}
				//when input is changed, it calls the event handler
				onChange={ event => this.onInputChange( event.target.value )} />
				
			</div>
		);
		
	}

	//separate out the event callback from the render function
	//event handler sets the state with search term and searches for the video with the handed-down prop onSearchTermChange()
	onInputChange(term){
		this.setState({term: term});
		this.props.onSearchTermChange(term);
	}

}

//tells React to export the SearchBar component
export default SearchBar;



