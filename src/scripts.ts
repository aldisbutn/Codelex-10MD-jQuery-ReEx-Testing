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


// Create the form 
$('.form-wrapper').html(`
    <form class="form js-form">
        <input required type="text" name="userName" placeholder="Username" class="userName-input">
        <input required type="email" name="email" placeholder="E-mail" class="email-input">
        <input required type="password" name="password" placeholder="Password" class="password-input">
        <button type="submit" class="button">Sign Up</button>
    </form>
`);

// Save the user data to the db if the login info is valid
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

// Check if the user info is valid and return a success message or a error message
$('.js-form').on('submit', (event) => {
  event.preventDefault();

  // Get the user inputed data
  const userNameInput = $('.userName-input').val() as string;
  const emailInput = $('.email-input').val() as string;
  const passwordInput = $('.password-input').val() as string;

  // Check if the user inputed data is valid
  const checkUserName = checkRegex(userNameInput, usernameRegex);
  const checkEmail = checkRegex(emailInput, emailRegex);
  const checkPassword = checkRegex(passwordInput, passwordRegex);

  // If the data is valid then save the user in the db, clear the form and display an success message
  if (checkUserName && checkEmail && checkPassword) {
    handleRegister();
    $('.userName-input, .email-input, .password-input').val('');
    swal({
      title: 'Congratulations, account created!',
      icon: 'success',
    });
  // If the data isnt valid then show an error message
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
