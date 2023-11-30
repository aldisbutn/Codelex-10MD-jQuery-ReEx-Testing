import $ from 'jquery';
import swal from 'sweetalert';
import axios from 'axios';
import { checkRegex, usernameRegex, emailRegex, passwordRegex } from './utils/checkRegex/checkRegex';

type User = {
  id: number;
  userName: string;
  email: string;
  password: string;
};

$('.form-wrapper').html(`
    <form class="form js-form">
        <input required type="text" name="userName" placeholder="Username" class="userName-input">
        <input required type="email" name="email" placeholder="E-mail" class="email-input">
        <input required type="password" name="password" placeholder="Password" class="password-input">
        <button type="submit" class="button">Sign Up</button>
    </form>
`);

const handleRegister = () => {
  const userNameInput = $('.userName-input').val() as string;
  const emailInput = $('.email-input').val() as string;
  const passwordInput = $('.password-input').val() as string;

  axios.post<User>('http://localhost:3004/users', {
    userName: userNameInput,
    email: emailInput,
    password: passwordInput
  })
}

$('.js-form').on('submit', (event) => {
  event.preventDefault();

  const userNameInput = $('.userName-input').val() as string;
  const emailInput = $('.email-input').val() as string;
  const passwordInput = $('.password-input').val() as string;

  const checkUserName = checkRegex(userNameInput, usernameRegex);
  const checkEmail = checkRegex(emailInput, emailRegex);
  const checkPassword = checkRegex(passwordInput, passwordRegex);

  if (checkUserName && checkEmail && checkPassword) {
    handleRegister();
    $('.userName-input, .email-input, .password-input').val('');
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
