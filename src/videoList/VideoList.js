import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

   const renderedVidList =  videos.map((vid) =>
    {
        return <VideoItem onVideoSelect={onVideoSelect} key={vid.id.videoId} video={vid} />
    })


    return (
        <div className='ui relaxed divided list'>
            {renderedVidList}
        </div>
    )
}

export default VideoList;
