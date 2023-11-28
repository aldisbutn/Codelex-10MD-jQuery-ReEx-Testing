export const usernameRegex = /^[a-zA-Z]{2,50}$/;
export const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;

export const checkRegex = (input: string, regex: RegExp) => regex.test(input);
