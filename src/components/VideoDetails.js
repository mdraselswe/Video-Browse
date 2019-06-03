import React from 'react'

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <p>Loading...</p>
  }

  const videSrc = `https:www.youtube.com/embed/${selectedVideo.id.videoId}`

  return (
    <div>
      <div>
        <iframe src={videSrc} />
      </div>
      <div>
        <h4>{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetails
