import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().min(4).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  age: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  address: yup.string().required(),
  number: yup.string().required(),
  phone: yup.string().required(),
});
