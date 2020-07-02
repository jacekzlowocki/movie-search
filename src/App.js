import React, { Component } from 'react';
import './App.css';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      searchResults: {},
    };
  }

  onFetch = (searchResults, searchText) => {
    this.setState({ searchResults, searchText });
  }

  render() {
    const { searchResults, searchText } = this.state;

    return (
      <div className="App">
        <SearchForm onFetch={this.onFetch} />
        <SearchResults searchResults={searchResults} searchText={searchText} />
      </div>
    );
  }
}

export default App;
