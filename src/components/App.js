import React from 'react'
import axios from 'axios'
import { API_KEY } from '../api/apiConfig'

import Search from './Search'
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'

class App extends React.Component {
  state = {
    videos: []
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

    this.setState({ videos: response.data.items })

    console.log(response.data.items)
  }
  render () {
    return (
      <div>
        <Search onSearchSubmit={this.onSearchSubmit} />
        <VideoDetails />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
