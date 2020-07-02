import React from 'react';
import isEmpty from 'lodash.isempty';
import { MovieItem } from './MovieItem';

export function SearchResults({ searchResults }) {
  if (isEmpty(searchResults)) {
    return null;
  }

  const { Error: error, Search } = searchResults;

  if (error) {
    return null;
  }

  return (
    <div className="Search-results-container">
      <ul className="Search-results">
        {Search.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
      </ul>
    </div>
  );
}