import React, { Component } from 'react';

class Search extends Component {

  state = {
    search: ''
  }

  handleChange = (e) => {
    // debugger
    this.setState({
      search: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    // debugger
    const lowCaseSearch = this.state.search.toLowerCase()
    const filteredItemsArray = this.props.orgItems.filter (
      item => {
        return item.name.toLowerCase().includes(lowCaseSearch)
      }
    )
    this.props.changePFilterInfo(filteredItemsArray)
    this.setState({ search: ''})
  }

  render() {
    return (
      <form>
      <h3>Search State value: {this.state.search}</h3>

        <input type = "text" onChange={this.handleChange} value={this.state.search}/>
        <input type = "submit" onClick= {this.handleClick} value="Search"/>
      </form>
    )
  }
}

export default Search;
