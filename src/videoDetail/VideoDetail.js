import React from "react";


const VideoDetail = ({video}) => {

    console.log('selected vid here', video);
    if (!video){
        return <div> Loading</div>;
    }

    const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSRC} title={video.snippet.title} />
            </div>
            <div className="ui segment"> 
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            
        </div>
    )
}

export default VideoDetail
