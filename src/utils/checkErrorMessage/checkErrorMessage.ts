export const checkError = (checkUserName: boolean, checkEmail: boolean, checkPassword: boolean) => {
  if (checkUserName && checkEmail && checkPassword) {
    return 'Congratulations, account created!';
  } else if (!checkUserName && !checkEmail) {
    return 'You entered a invalid username and email! Your username should be atleast 2 characters, max 50 characters and contain only letters and a e-mail should be written in this format - example@example.com';
  } else if (!checkUserName && !checkPassword) {
    return 'You entered a invalid username and password! Your username should be atleast 2 characters, max 50 characters and contain only letters and a password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)';
  } else if (!checkEmail && !checkPassword) {
    return 'You entered a invalid e-mail and password! Your e-mail should be written in this format - example@example.com and a password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)';
  } else if (!checkUserName) {
    return 'You entered a invalid username! Your username should be atleast 2 characters, max 50 characters and contain only letters';
  } else if (!checkEmail) {
    return 'You entered a invalid e-mail! It should be written in this format - example@example.com';
  } else if (!checkPassword) {
    return 'You entered a invalid password! Your password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)';
  }
};
