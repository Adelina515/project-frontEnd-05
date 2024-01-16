import css from './sign-up-form.module.css';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthButton from '../../btn/AuthButton/AuthButton';
import { signUpSchema } from '../../schemas/auth/auth-schemas';
import { register } from '../../redux/auth/auth-operations';
import sprite from '../../img/sprite/symbol-defs.svg';


const SignUpForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={`${css.input} ${
                  errors.name && touched.name ? css.error : ''
                }
                ${touched.name && !errors.nam ? css.success : ''}`}
              />
              <ErrorMessage
                name="name"
                className={css.textError}
                component="p"
              />

              <div className={css.label}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`${css.input} ${
                    errors.name && touched.name ? css.error : ''
                  }
                  ${touched.name && !errors.nam ? css.success : ''}`}
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
                ${touched.password && !errors.password ? css.success : ''}`}
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
              <AuthButton children="Sign Up" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
