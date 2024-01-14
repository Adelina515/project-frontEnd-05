import css from "./sign-up-form.module.css";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from 'formik';
import AuthButton from "../../btn/AuthButton/AuthButton";
import { signUpSchema } from "../../schemas/auth/auth-schemas";
import { register } from "../../redux/auth/auth-operations";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        email: "",
        password: ""
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        dispatch(register(values));
        resetForm();
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signUpSchema}>
                <Form className={css.form}>
                    <div className={css.inputWrapper}>
                        <Field type="text" name="name" placeholder="Name" className={css.input} required />
                        <Field type="email" name="email" placeholder="Email" className={css.input} required />
                        <Field type="text" name="password" placeholder="Password" className={css.input} required />
                    </div>
                    <AuthButton children="Sign Up" />
                </Form>
            </Formik>
        </>
    );
}



export default SignUpForm;