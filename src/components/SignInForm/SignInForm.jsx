import css from './sign-in-form.module.css';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import AuthButton from '../../btn/AuthButton/AuthButton';
import { signInSchema } from '../../schemas/auth/auth-schemas';
import { login } from '../../redux/auth/auth-operations';
import sprite from '../../img/sprite/symbol-defs.svg';

const SignInForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(login(values));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <div className={css.label}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`${css.input} ${
                    errors.name && touched.name ? css.error : ''
                  }
              ${touched.name && !errors.nam ? css.success : ''}`}
                  required
                />
                {errors.email && touched.email && (
                  <div className={css.messageWrapper}>
                    <svg className={css.iconError}>
                      <use href={`${sprite}#icon-circle-red`}></use>
                    </svg>
                    <ErrorMessage
                      component="p"
                      className={css.textError}
                      name="email"
                    />
                  </div>
                )}
                {!errors.email && touched.email && (
                  <div className={css.messageWrapper}>
                    <svg className={css.iconSuccess}>
                      <use href={`${sprite}#icon-circle-green`}></use>
                    </svg>
                    <p className={css.textSuccess}>Success email</p>
                  </div>
                )}
              </div>
              <div className={css.label}>
                <Field
                  type="text"
                  name="password"
                  placeholder="Password"
                  className={`${css.input} ${
                    errors.password && touched.password ? css.error : ''
                  }
              ${touched.name && !errors.nam ? css.success : ''}`}
                  required
                />
                {errors.password && touched.password && (
                  <div className={css.messageWrapper}>
                    <svg className={css.iconError}>
                      <use href={`${sprite}#icon-circle-red`}></use>
                    </svg>
                    <ErrorMessage
                      component="p"
                      className={css.textError}
                      name="password"
                    />
                  </div>
                )}
                {!errors.password && touched.password && (
                  <div className={css.messageWrapper}>
                    <svg className={css.iconSuccess}>
                      <use href={`${sprite}#icon-circle-green`}></use>
                    </svg>
                    <p className={css.textSuccess}>Success password</p>
                  </div>
                )}
              </div>
            </div>
            <AuthButton children="Sign In" />
          </Form>
        )}
      </Formik>
    </>
  );
};
export default SignInForm;
