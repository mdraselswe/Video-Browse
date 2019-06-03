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
        <div className="ui input" style={{width: '100%'}}>
          <input type='text' placeholder='Please search your video' onChange={this.onInputChange} />
        </div>
      </form>
    )
  }
}

export default Search
