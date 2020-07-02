import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { search } from '../utils/omdbApi';
import isEmpty from 'lodash.isempty';

export class SearchForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false,
      searchText: '',
      searchResults: {},
    };

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();

    // handling getting back to the page using browser history
    window.addEventListener('pageshow', () => {
      this.onSearchTextChange(this.inputRef.current.value);
    });
  }

  onChange = (e) => {
    this.onSearchTextChange(e.target.value.trim());
  };

  onSearchTextChange = debounce(async (searchText) => {
    if (this.state.searchText === searchText) {
      return;
    }

    this.setState({
      searchText,
      isSearching: true,
    });

    if (isEmpty(searchText)) {
      return this.onSearchResults(searchText, []);
    }

    try {
      const searchResults = await search(searchText);
      this.onSearchResults(searchText, searchResults);
    } catch (e) {
      this.onSearchResultsError(searchText, e);
    }
  }, this.props.debounceTime);

  onSearchResults = (searchText, searchResults) => {
    if (searchText !== this.state.searchText) {
      return;
    }

    this.setState({ isSearching: false, searchResults });
    this.props.onFetch(searchResults, searchText);
  }

  onSearchResultsError = (searchText, error) => {
    if (searchText !== this.state.searchText) {
      return;
    }

    this.setState({ isSearching: false });
    window.alert(error); // TODO: pretty error notification
  }

  renderStatus() {
    const { isSearching, searchText, searchResults } = this.state;

    if (isSearching) {
      return (
        <p className="Search-status">searching ...</p>
      );
    }

    if (!isEmpty(searchResults)) {
      const { Error: error, Search, totalResults } = searchResults;

      if (error) {
        return (
          <p className="Search-status">{error}</p>
        );
      }

      return (
        <p className="Search-status">{Search.length} of {totalResults} results for <i>{searchText}</i>:</p>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="Search-form">
        <p className="Search-label"><label htmlFor="Search-input">Type to search a movie:</label></p>
        <input
          id="Search-input"
          ref={this.inputRef}
          className="Search-input"
          placeholder="e.g. Interstellar 2014"
          onChange={this.onChange}
        />
        {this.renderStatus()}
      </div>
    );
  }
}

SearchForm.propTypes = {
  debounceTime: PropTypes.number,
  onFetch: PropTypes.func,
};

SearchForm.defaultProps = {
  // debounce timer needs to be relatively high due to search API calls limit
  // if limit is reached early, search should be triggered only by manual submit
  debounceTime: 250,
  onFetch: () => {},
};
