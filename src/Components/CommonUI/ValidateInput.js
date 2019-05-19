import Validator from "validator";
import isEmpty from "lodash/isEmpty";

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.userId)) {
    errors.message = "User Name is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.message = "Password is required";
  }

  if (Validator.isEmpty(data.userId) && Validator.isEmpty(data.password)) {
    errors.message = "User Name and Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
