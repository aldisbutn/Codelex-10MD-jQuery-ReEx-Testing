import { processData } from './dataProcessor';

describe('processData', () => {
  it('should sum up all numbers in the array', () => {
    const result = processData([1, 2, 3, 4]);

    expect(result).toEqual(10);
  });
});
