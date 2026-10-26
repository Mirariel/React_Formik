import * as yup from 'yup'

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
  lastName: yup.string().trim().min(2).max(64).required(),
  email: yup.string().email().trim().required()
})
