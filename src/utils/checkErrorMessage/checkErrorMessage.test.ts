import { checkError } from './checkErrorMessage';

describe('checkError', () => {
  it('should show success message if all inputs are valid', () => {
    const result = checkError(true, true, true);

    expect(result).toBe('Congratulations, account created!');
  });
});

describe('checkError', () => {
  it('should return error message if username and email are invalid', () => {
    const result = checkError(false, false, true);

    expect(result).toBe(
      'You entered a invalid username and email! Your username should be atleast 2 characters, max 50 characters and contain only letters and a e-mail should be written in this format - example@example.com'
    );
  });
});

describe('checkError', () => {
  it('should return error message if username and password are invalid', () => {
    const result = checkError(false, true, false);

    expect(result).toBe(
      'You entered a invalid username and password! Your username should be atleast 2 characters, max 50 characters and contain only letters and a password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)'
    );
  });
});

describe('checkError', () => {
  it('should return error message if email and password are invalid', () => {
    const result = checkError(true, false, false);

    expect(result).toBe(
      'You entered a invalid e-mail and password! Your e-mail should be written in this format - example@example.com and a password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)'
    );
  });
});

describe('checkError', () => {
  it('should return error message if username is invalid', () => {
    const result = checkError(false, true, true);

    expect(result).toBe(
      'You entered a invalid username! Your username should be atleast 2 characters, max 50 characters and contain only letters'
    );
  });
});

describe('checkError', () => {
  it('should return error message if email is invalid', () => {
    const result = checkError(true, false, true);

    expect(result).toBe('You entered a invalid e-mail! It should be written in this format - example@example.com');
  });
});

describe('checkError', () => {
  it('should return error message if password is invalid', () => {
    const result = checkError(true, true, false);

    expect(result).toBe(
      'You entered a invalid password! Your password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)'
    );
  });
});
