import React from 'react';
import placeholder from '../assets/poster-placeholder.png';

export function MovieItem({ movie }) {
  const { Title, Poster, Type, Year, imdbID } = movie;
  const src = Poster === 'N/A' ? placeholder : Poster;

  return (
    <li className="Search-result clearfix">
      <img src={src} alt={Title} className="Poster" />
      <h2 className="Movie-title">{Title} ({Year})</h2>
      <p className="Movie-properties">
        Type: {Type}<br/>
        Read more: <a href={`https://www.imdb.com/title/${imdbID}/?ref_=nv_sr_srsg_0`}>imdb</a>
      </p>
    </li>
  );
}

