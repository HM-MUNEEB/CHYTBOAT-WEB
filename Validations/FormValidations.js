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
export function RegistrationValidation(email, password, userName, phone) {
  var emailValid = null;
  var passValid = null;
  var phoneValid = null;
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
  if (phone.length == 11) {
    phoneValid = true;
  } else {
    phoneValid = false;
  }

  const valid = {
    email: emailValid,
    pass: passValid,
    userName: userNameValid,
    phone: phoneValid,
  };

  console.log(valid);

  return valid;
}
