import $ from 'jquery';
import swal from 'sweetalert';
import { checkRegex, usernameRegex, emailRegex, passwordRegex } from './utils/checkRegex/checkRegex';

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
    $('.userName-input').val('');
    $('.email-input').val('');
    $('.password-input').val('');
    swal({
      title: 'Congratulations, account created!',
      icon: 'success',
    });
  } else if (!checkUserName && !checkEmail) {
    swal({
      title: 'You entered a invalid username and email!',
      text: 'Your username should be atleast 2 characters, max 50 characters and contain only letters and a e-mail should be written in this format - example@example.com',
      icon: 'error',
    });
  } else if (!checkUserName && !checkPassword) {
    swal({
      title: 'You entered a invalid username and password!',
      text: 'Your username should be atleast 2 characters, max 50 characters and contain only letters and a password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)',
      icon: 'error',
    });
  } else if (!checkEmail && !checkPassword) {
    swal({
      title: 'You entered a invalid e-mail and password!',
      text: 'Your e-mail should be written in this format - example@example.com and a password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)',
      icon: 'error',
    });
  } else if (!checkUserName) {
    swal({
      title: 'You entered a invalid username!',
      text: 'Your username should be atleast 2 characters, max 50 characters and contain only letters',
      icon: 'error',
    });
  } else if (!checkEmail) {
    swal({
      title: 'You entered a invalid e-mail!',
      text: 'It should be written in this format - example@example.com',
      icon: 'error',
    });
  } else if (!checkPassword) {
    swal({
      title: 'You entered a invalid password!',
      text: 'Your password should be atleast 8 characters and must contain atleast 1 number and 1 special character(!, @, #, $, %, ^, &, *)',
      icon: 'error',
    });
  }
});
