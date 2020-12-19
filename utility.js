/** @format */

//implementing basic form validation.
const validateForm = () => {
  const errors = {};
  const { account } = this.state;
  //if the input field (username or password) is empty, send an error message to the respective property of the error object
  if (account.username.trim() === '') errors.username = 'Username is required.';
  if (account.password.trim() === '') errors.password = 'Password is required.';

  //If there's nothing in the error object return nothing, otherwise, return the errors object - (which is then used in the handleSubmit method)
  return Object.keys(errors).length === 0 ? {} : errors;
  //Object.keys returns an array of property names in an object, so if the length is 0, it means there's nothing in that object.
};
