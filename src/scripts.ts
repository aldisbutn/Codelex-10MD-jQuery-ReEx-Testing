import $ from 'jquery';
import {
  checkRegex,
  usernameRegex,
  emailRegex,
  passwordRegex,
} from './utils/checkRegex/checkRegex';

$('.form-wrapper').html(`
    <form class="form js-form">
        <input required type="text" name="userName" placeholder="Username" class="userName-input">
        <input required type="email" name="email" placeholder="E-mail" class="email-input">
        <input required type="password" name="password" placeholder="Password" class="password-input">
        <button type="submit" class="button">Sign Up</button>
    </form>
`);

$('.js-form').on('submit', (event) => {
  event.preventDefault();

  const userNameInput = String($('.userName-input').val());
  const emailInput = String($('.email-input').val());
  const passwordInput = String($('.password-input').val());

  const checkUserName = checkRegex(userNameInput, usernameRegex);
  const checkEmail = checkRegex(emailInput, emailRegex);
  const checkPassword = checkRegex(passwordInput, passwordRegex);

  if (checkUserName && checkEmail && checkPassword) {
    alert('Congratulations, account created!');
    $('.userName-input').val('');
    $('.email-input').val('');
    $('.password-input').val('');
  } else if (!checkUserName) {
    alert(
      'You entered a invalid username! A username should be atleast 2 characters, max 50 characters and contain only letters'
    );
  } else if (!checkEmail) {
    alert(
      'You entered a invalid e-mail! It should be written in this format - example@example.com'
    );
  } else if (!checkPassword) {
    alert(
      'You entered a invalid password! A password should be atleast 8 characters and must contain atlest 1 number and 1 special character(!, @, #, $, %, ^, &, *)'
    );
  }
});
