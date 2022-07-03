import validator from "validator";

export function LoginValidation(email, password) {
  var emailValid = null;
  var passValid = null;

  if (validator.isEmail(email)) {
    emailValid = true;
  } else {
    passValid = false;
  }
  if (password.length >= 6) {
    passValid = true;
  } else {
    passValid = false;
  }

  const valid = {
    email: emailValid,
    pass: passValid,
  };

  console.log(valid);

  return valid;
}
export function RegistrationValidation(email, password, userName) {
  var emailValid = null;
  var passValid = null;
  var userNameValid = null;

  if (validator.isEmail(email)) {
    emailValid = true;
  } else {
    emailValid = false;
  }
  if (password.length >= 6) {
    passValid = true;
  } else {
    passValid = false;
  }

  if (userName.length >= 6) {
    userNameValid = true;
  } else {
    userNameValid = false;
  }
  const valid = {
    email: emailValid,
    pass: passValid,
    userName: userNameValid,
  };

  console.log(valid);

  return valid;
}
