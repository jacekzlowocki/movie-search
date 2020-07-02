export function parseSearch(text = '') {
  let title = text;
  let year;

  const yearMatch = text.match(/\s(\d{4})$/);

  if (yearMatch) {
    title = text.substr(0, yearMatch.index);
    year = yearMatch[1];
  }

  title = title.trim().replace(/^"|"$/g, '').trim();
  return { title, year };
}