import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//this is an npm module. The YTSearch method makes an ajax call.
import YTSearch from 'youtube-api-search';
//if it's a file you write, you have to provide the relative path to it. Not so with library files.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//'react' is the name of the dependency folder

//the most "parent" component should be the one that fetches api data. Usually the index.js
const API_KEY = 'AIzaSyCcyCyX4Fa8f2s-m1mVFuzri9Lf2uLYtTg';



//a React component is javascript that produces HTML
//Create a new component. This is a class, not an instance.

//A component that includes another component, SearchBar, from a different file
class App extends Component {
	constructor(props){
		super(props);
		//initializing this.state to an empty array of videos
		this.state = { videos: [] };

		//moving the search inside the constructor makes sure the user sees some data right away. It is immediately kicked off.
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//shortened syntax for this.setState({ videos: videos });
		});
	}

	//passing data (videos) from parent component App to child component VideoList, you can pass it as a prop.
	//with state being the prop. videos being the data. this pointing to child component VideoList. 
	render ( ){
		return(
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}		
}

//Take this component generated HTML and put it on the page (in the DOM)
//you need to pass an instance of App, not the class. Put a self-closing tag around App.
//second argument is where to put it in the DOM. 
ReactDOM.render(<App />, document.querySelector('.container'));