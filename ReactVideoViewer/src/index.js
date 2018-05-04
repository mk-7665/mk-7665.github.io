import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//this is an npm module. The YTSearch method makes an ajax call.
import YTSearch from 'youtube-api-search';
//if it's a file you write, you have to provide the relative path to it. Not so with library files.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//'react' is the name of the dependency folder

//the most "parent" component should be the one that fetches api data. Usually the index.js
const API_KEY = 'AIzaSyCcyCyX4Fa8f2s-m1mVFuzri9Lf2uLYtTg';



//a React component is javascript that produces HTML
//Create a new component. This is a class, not an instance.

//A component that includes another component, SearchBar, from a different file
class App extends Component {
	constructor(props){
		super(props);
		//initializing this.state with an array of videos and the concept of a selectedVideo
		this.state = { videos: [],
					   selectedVideo: null };

	//starts the initial search with surfboards
	this.videoSearch('surfboards');

	}
	//refactored youtube search into its own method. Takes a single parameter: a search term.
	videoSearch(term){
		YTSearch({key: API_KEY, term: term }, (videos) => {
			this.setState({ videos: videos,
							selectedVideo: videos[0] });
		});
	}

	//passing data (videos) from parent component App to child component VideoList, you can pass it as a prop.
	//with state being the prop. videos being the data. this pointing to child component VideoList. 
	//add a function, onVideoSelect to handle a video being selected. It will be passed down to VideoList as a prop.
	//components will appear in the order listed.
	render ( ){
		return(
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect ={ selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div>
		);
	}		
}

//callback flow of onVideoSelect: App -> video_list -> video_list_item 
//Take this component generated HTML and put it on the page (in the DOM)
//you need to pass an instance of App, not the class. Put a self-closing tag around App.
//second argument is where to put it in the DOM. 
ReactDOM.render(<App />, document.querySelector('.container'));