import React from 'react';
import ReactDOM from 'react-dom';

//if it's a file you write, you have to provide the relative path to it. Not so with library files.
import SearchBar from './components/search_bar';

//'react' is the name of the dependency folder

const API_KEY = 'AIzaSyCcyCyX4Fa8f2s-m1mVFuzri9Lf2uLYtTg';
//component is javascript that produces HTML
//Create a new component. This is a class, not an instance.
//Fat arrow is ES6 syntax for a function. It also maps.

//A component that includes another component, SearchBar, from a different file
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
}

//Take this component generated HTML and put it on the page (in the DOM)
//you need to pass an instance of App, not the class. Put a self-closing tag around App.
//second argument is where to put it in the DOM. 
ReactDOM.render(<App />, document.querySelector('.container'));