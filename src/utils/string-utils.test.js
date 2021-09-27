import { capitalize } from './string-utils';

describe('string-utils test suite', () => {
  test('it capitalizes a multi word string properly', () => {
    const actual = capitalize('get Up And code');
    expect(actual).toBe('Get up and code');
  });

  test('it capitalizes a single word string properly', () => {
    const actual = capitalize('code');
    expect(actual).toBe('Code');
  });

  test('it capitalizes a single character string properly', () => {
    const actual = capitalize('c');
    expect(actual).toBe('C');
  });
})