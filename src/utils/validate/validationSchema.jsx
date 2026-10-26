import * as yup from 'yup'

const passwordError =
  'Password must be 8-16 characters long and include an uppercase and a lowercase Latin letter, a digit, and a special character, with no spaces.'

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(32).required(),
  lastName: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email().trim().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,16}$/,
      passwordError
    )
    .required(),
  phone: yup
    .string()
    .length(13)
    .matches(/^\+380\d{9}$/, 'Enter a valid phone number (+380*********)')
    .required(),
  birthday: yup.date().max(new Date())
})
