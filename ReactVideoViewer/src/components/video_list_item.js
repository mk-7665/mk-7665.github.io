import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//identical to const video = props.video;
	//identical to const onVideoSelect = props.onVideoSelect;
	//get the data from the api response and assign them to appropriate variables. Expand the object to see the json structure.
	console.log(video);
	const imageUrl= video.snippet.thumbnails.default.url;

	//pass in the event handler here onVideoSelect to a click event
	return (
		<li onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className = 'video-list media'>
				<div className = 'media-left'>
					<img className = 'media-object' src={imageUrl} />
				</div>
				<div className = 'media-body'>
					<div className = 'media-heading'>
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
		);
};

export default VideoListItem;
