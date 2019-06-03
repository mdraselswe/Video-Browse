import React from 'react'

class Search extends React.Component {
    state = {
        term: ''
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.term)
    }

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' placeholder='Please search your video' onChange={this.onInputChange} />
      </form>
    )
  }
}

export default Search
