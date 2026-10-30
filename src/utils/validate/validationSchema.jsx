import * as yup from 'yup'

const ERROR_MESSAGES = {
  password:
    'Password must be 8-16 characters long and include an uppercase and a lowercase Latin letter, a digit, and a special character, with no spaces.',
  name: 'Name must be 2-32 letters long, start with a capital letter, and contain no digits or special characters.'
}

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .matches(/^[A-Z][a-z]{1,31}$/, ERROR_MESSAGES.name)
    .required(),
  lastName: yup
    .string()
    .trim()
    .matches(/^[A-Z][a-z]{1,31}$/, ERROR_MESSAGES.name)
    .required(),
  email: yup.string().email().trim().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,16}$/,
      ERROR_MESSAGES.password
    )
    .required(),
  phone: yup
    .string()
    .length(13)
    .matches(/^\+380\d{9}$/, 'Enter a valid phone number (+380*********)')
    .required(),
  birthday: yup.date().max(new Date())
})
