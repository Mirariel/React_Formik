import classNames from 'classnames'
import { Field } from 'formik'
import styles from './../FormStyles.module.sass'

function Input ({ name, label, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, form, meta: { error, touched } }) => {
        const inputStyles = classNames(styles.input, {
          [styles.valid]: !error && touched,
          [styles.invalid]: error && touched
        })

        return (
          <label>
            <span>{label} </span>
            <input className={inputStyles} {...restProps} {...field} />
            {error && touched && <div className={styles.error}>{error}</div>}
          </label>
        )
      }}
    </Field>
  )
}

export default Input
