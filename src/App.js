import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderForm from './components/headerForm';
import Search from './components/search';
import Item from './components/item';
import Items from './data/items';

class App extends Component {

  state = {
    header: '',
    allItems: Items,
    filtered: false,
    filteredItems: []
  }

  changePHeader = (value) => {
    this.setState({
      header: value
    })
  }

  arraySelection = () => {
    if (this.state.filtered) {
      return this.state.filteredItems;
    } else {
      return this.state.allItems;
    }
  }

render () {

  let itemList = this.arraySelection().map((item, index) =>
    <Item name={item.name} key={index+1} />)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>


      <h3>The parent component header now is set to: {this.state.header}</h3>
      <HeaderForm changePHeader={this.changePHeader}/>

      <ul>{itemList}</ul>
    </div>
    );

  }
}

export default App;
