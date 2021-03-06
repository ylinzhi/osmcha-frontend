import { Map } from 'immutable';

import { getObjAsQueryParam, getSearchObj } from '../query_params';

describe('getSearchObj', () => {
  it('with input provided.', () => {
    const search =
      '?filters=%7B%22date__gte%22%3A%5B%7B%22label%22%3A%222017-06-28%22%2C%22value%22%3A%222017-06-28%22%7D%5D%2C%22is_suspect%22%3A%5B%7B%22label%22%3A%22Yes%22%2C%22value%22%3A%22True%22%7D%5D%2C%22reasons%22%3A%5B%7B%22label%22%3A%22mass%20modification%22%2C%22value%22%3A1%7D%5D%7D';
    let { filters } = getSearchObj(search).toObject();
    expect(filters.has('date__gte')).toBe(true);
    expect(filters.has('is_suspect')).toBe(true);
    expect(filters.has('reasons')).toBe(true);
    expect(filters.size).toBe(3);
  });
  it('without input .', () => {
    var searchObj = getSearchObj();
    expect(searchObj).toBe(Map());
  });
});

describe('test getObjAsQueryParam', () => {
  it('with input provided.', () => {
    const toTest = getObjAsQueryParam();
    expect(toTest).toBe('');
  });
});
