import React from 'react'
import axios from 'axios'
import { API_KEY } from '../api/apiConfig'

import Search from './Search'
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount () {
    this.onSearchSubmit('buildings')
  }

  onSearchSubmit = async term => {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: API_KEY,
          q: term
        }
      }
    )

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })

    console.log(response.data.items)
  }

  onSelectedVideo = video => {
    console.log(video)
    this.setState({ selectedVideo: video })
  }

  render () {
    return (
      <div className='ui container'>
        <Search onSearchSubmit={this.onSearchSubmit} />
        <div style={{display: 'flex'}}>
          <VideoDetails selectedVideo={this.state.selectedVideo} />
          <VideoList
            onSelectedVideo={this.onSelectedVideo}
            videos={this.state.videos}
          />
        </div>
      </div>
    )
  }
}

export default App
