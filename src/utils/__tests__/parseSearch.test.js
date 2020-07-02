import { parseSearch } from "../parseSearch";

describe('parseSearch', () => {
  it('returns object with `title` property', () => {
    expect(parseSearch('foo')).toHaveProperty('title');
  });

  it('returns object with `year` property', () => {
    expect(parseSearch('foo')).toHaveProperty('year');
  });

  it('returns correct result for empty string', () => {
    expect(parseSearch('')).toEqual({
      title: '',
      year: undefined,
    });
  });

  it('returns correct result for "Interstellar"', () => {
    expect(parseSearch('Interstellar')).toEqual({
      title: 'Interstellar',
      year: undefined,
    });
  });

  it('returns correct result for "Interstellar 14"', () => {
    expect(parseSearch('Interstellar 14')).toEqual({
      title: 'Interstellar 14',
      year: undefined,
    });
  });

  it('returns correct result for "Interstellar 2014"', () => {
    expect(parseSearch('Interstellar 2014')).toEqual({
      title: 'Interstellar',
      year: '2014',
    });
  });

  it('returns correct result for "1984"', () => {
    expect(parseSearch('1984')).toEqual({
      title: '1984',
      year: undefined,
    });
  });

  it('returns correct result for "1984 1984"', () => {
    expect(parseSearch('1984 1984')).toEqual({
      title: '1984',
      year: '1984',
    });
  });

  it('returns correct result for "1984 1952"', () => {
    expect(parseSearch('1984 1952')).toEqual({
      title: '1984',
      year: '1952',
    });
  });

  it('returns trimmed title', () => {
    expect(parseSearch(' 1984     1984')).toEqual({
      title: '1984',
      year: '1984',
    });
  });

  it('returns correct result for "Class of 1984"', () => {
    expect(parseSearch('Class of 1984')).toEqual({
      title: 'Class of',
      year: '1984',
    });
  });

  it('returns correct result for "Class of 1984" (in quotes)', () => {
    expect(parseSearch('"Class of 1984"')).toEqual({
      title: 'Class of 1984',
      year: undefined,
    });
  });

  it('returns correct result for ""Class of 1984" 1982" (in quotes)', () => {
    expect(parseSearch('"Class of 1984" 1982')).toEqual({
      title: 'Class of 1984',
      year: '1982',
    });
  });

  it('returns correct result for "One Flew Over the Cuckoo\'s Nest"', () => {
    expect(parseSearch("One Flew Over the Cuckoo's Nest")).toEqual({
      title: 'One Flew Over the Cuckoo\'s Nest',
      year: undefined,
    });
  });
});
