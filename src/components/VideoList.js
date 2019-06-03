import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderedVideo = videos.map(video => {
    return (
      <VideoItem
        onSelectedVideo={onSelectedVideo}
        key={video.id.videoId}
        video={video}
      />
    )
  })

  return <div>{renderedVideo}</div>
}

export default VideoList
