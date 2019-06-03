import React from 'react'

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div onClick={() => onSelectedVideo(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <h4 style={{cursor: 'pointer'}}>{video.snippet.title}</h4>
    </div>
  )
}

export default VideoItem
