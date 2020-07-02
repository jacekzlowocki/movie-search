import queryString from 'querystring';
import { parseSearch } from './parseSearch';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = '157f34ed';

export async function search(text) {
  const { title, year } = parseSearch(text);
  const url = getURL(title, year);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

function getURL(title, year = null) {
  const query = {
    apikey: API_KEY,
    s: title,
  };

  if (year) {
    query.y = year;
  }

  return `${API_URL}?${queryString.stringify(query)}`;
}
