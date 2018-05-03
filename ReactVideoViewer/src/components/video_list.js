import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		//for each video object, put it inside a video_list_item component, which is a pair of <li> tags. Returns an array of components.
		//etag is the special id for each video from the youtube-search api. Define the key as the etag
		//video_list passes onVideoSelect to child component video_list_item as a prop.
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />
			);
	});

	return (
		//to define a css class inside an HTML tag, in React, it is className. Not class! Class is used for declaring react components!
		<ul className="col-md-4 col-lg-5 list-group" >
			{videoItems}
		</ul>
		);
};

export default VideoList;

//sideNote: it's important to define an index (key) for each item of an array so that React could update individual items faster.
//If left off, the system becomes much less efficient. Reach has to throw the search result away and start again per update.