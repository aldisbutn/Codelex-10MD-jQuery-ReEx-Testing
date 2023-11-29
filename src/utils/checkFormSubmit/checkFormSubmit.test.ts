import { submitForm } from './checkFormSubmit';

describe('checkUserNameRegex', () => {
  it('should return true if all fields are filled', () => {
    const result = submitForm('aldisbutton', 'aldis@codelex.lv', 'ald!s123');

    expect(result).toBe('Form submitted');
  });
});

describe('checkUserNameRegex', () => {
  it('should return false if a field is empty', () => {
    const result = submitForm('aldisbutton', '', 'ald!s123');

    expect(result).toBe('Form not submitted');
  });
});
