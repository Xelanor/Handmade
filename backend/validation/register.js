const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "E-mail adresi geçersizdir";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "E-mail adresi gereklidir";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Şifre en az 6 karakter uzunluğunda olmalıdır";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Şifre gereklidir";
  }

  if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm = "Şifre en az 6 karakter uzunluğunda olmalıdır";
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = "Şifreler uyuşmuyor";
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = "Şifre gereklidir";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
