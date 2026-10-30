import classNames from 'classnames'
import { Field } from 'formik'

function Input ({ name, label, classes, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, form, meta: { error, touched } }) => {
        const inputStyles = classNames(classes.input, {
          [classes.valid]: !error && touched,
          [classes.invalid]: error && touched
        })

        return (
          <label>
            <span>{label} </span>
            <input className={inputStyles} {...restProps} {...field} />
            {error && touched && <div className={classes.error}>{error}</div>}
          </label>
        )
      }}
    </Field>
  )
}

export default Input
