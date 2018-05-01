import React from 'react';

const VideoDetail = ({video}) => {

	//put a check in place to see if the parent component has passed it a video yet. If not, say "Loading"
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	//same as 'https://www.youtube.com/embed/' + videoId;

	return (
		<div className="video-detail col-md-8 col-lg-7 my-5">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}> </iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
		);
};

export default VideoDetail;
