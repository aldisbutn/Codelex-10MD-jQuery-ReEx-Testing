import $ from 'jquery';

export const submitForm = (
  userName: string,
  email: string,
  password: string
) => {
  $('.form-wrapper').html(`
        <form class="form js-form">
            <input required type="text" name="${userName}" placeholder="Username" class="userName-input">
            <input required type="email" name="${email}" placeholder="E-mail" class="email-input">
            <input required type="password" name="${password}" placeholder="Password" class="password-input">
            <button type="submit">Sign Up</button>
        </form>
    `);

  $('.js-form').on('submit', (event) => {
    event.preventDefault();

    const userNameInput = String($('.userName-input').val());
    const emailInput = String($('.email-input').val());
    const passwordInput = String($('.password-input').val());

    if (userNameInput !== '' && emailInput !== '' && passwordInput !== '') {
      console.log('Form submitted');
    } else {
      console.log('Form not submitted');
    }
  });
};
