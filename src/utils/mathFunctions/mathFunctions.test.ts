import { add, multiply } from './mathFunctions';

describe('add', () => {
  it('should add two numbers', () => {
    const result = add(6, 8);

    expect(result).toEqual(14);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    const result = multiply(2, 2);

    expect(result).toEqual(4);
  });
});
