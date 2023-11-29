export const submitForm = (userName: string, email: string, password: string) => {
  if (userName !== '' && email !== '' && password !== '') {
    return 'Form submitted';
  } else {
    return 'Form not submitted';
  }
};
