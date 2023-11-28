import {
  checkRegex,
  usernameRegex,
  emailRegex,
  passwordRegex,
} from './checkRegex';

// Checking if the username regex is working correctly
describe('checkUserNameRegex', () => {
  it('should return true if username is 2 characters', () => {
    const result = checkRegex('ab', usernameRegex);

    expect(result).toEqual(true);
  });
});

describe('checkUserNameRegex', () => {
  it('should return true if username is 50 characters', () => {
    const result = checkRegex(
      'qhwvjsylgtrbapdxcnouiefzkmaxqjthwsgcbnlodyvrukpefa',
      usernameRegex
    );

    expect(result).toEqual(true);
  });
});

describe('checkUserNameRegex', () => {
  it('should return false if username is only 1 character', () => {
    const result = checkRegex('a', usernameRegex);

    expect(result).toEqual(false);
  });
});

describe('checkUserNameRegex', () => {
  it('should return false if username is longer than 50 characters', () => {
    const result = checkRegex(
      'qhwvjsylgtrbapdxcnouiefzkmaxqjthwsgcbnlodyvrukpefaqix',
      usernameRegex
    );

    expect(result).toEqual(false);
  });
});

describe('checkUserNameRegex', () => {
  it('should return false if username contains numbers', () => {
    const result = checkRegex('ab123', usernameRegex);

    expect(result).toEqual(false);
  });
});

describe('checkUserNameRegex', () => {
  it('should return false if username contains symbols', () => {
    const result = checkRegex('ab!@#', usernameRegex);

    expect(result).toEqual(false);
  });
});

// Checking if the email regex is working correctly
describe('checkEmailRegex', () => {
  it('should return true if the email format is valid', () => {
    const result = checkRegex('aldis@codelex.lv', emailRegex);

    expect(result).toEqual(true);
  });
});

describe('checkEmailRegex', () => {
  it('should return false if email doesnt have @', () => {
    const result = checkRegex('aldisatcodelex.lv', emailRegex);

    expect(result).toEqual(false);
  });
});

describe('checkEmailRegex', () => {
  it('should return false if email doesnt have any symbols', () => {
    const result = checkRegex('aldisatcodelexlv', emailRegex);

    expect(result).toEqual(false);
  });
});

// Checking if the password regex is working correctly
describe('checkPasswordRegex', () => {
  it('should return true if the password is atleast 8 characters, contains atleast 1 number and 1 special character', () => {
    const result = checkRegex('ald!s12345', passwordRegex);

    expect(result).toEqual(true);
  });
});

describe('checkPasswordRegex', () => {
  it('should return false if the password isnt atleast 8 characters but contains atleast 1 number and 1 special character', () => {
    const result = checkRegex('al!1', passwordRegex);

    expect(result).toEqual(false);
  });
});

describe('checkPasswordRegex', () => {
  it('should return true if the password is atleast 8 characters and contains only symbols and numbers', () => {
    const result = checkRegex('!@#$%12345', passwordRegex);

    expect(result).toEqual(true);
  });
});
