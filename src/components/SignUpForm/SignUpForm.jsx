import css from "./sign-up-form.module.css";
import AuthButton from "../../btn/AuthButton/AuthButton";
const SignUpForm=()=>{
    // const initialValues={
    //     name:"",
    //     emeil:"",
    //     password:""
    // }
    // const signUpSchema = Yup.object()({
    //     name: Yup.string()
    //       .required('Required')
    //       .min(2, 'Name must be at least 2 characters')
    //       .max(10, 'Name must be no more than 16 characters'),
      
    //     email: Yup.string().matches(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/).email('Invalid email address').required('Required'),
      
    //     password: Yup.string()
    //       .min(6, 'Password must be at least 6 characters')
    //       .required('Required'),
    //   });
    return(
        <>
            <form className={css.form}>
                <div className={css.inputWrapper}>
               <input  type="text" name="name" placeholder="Name" className={css.input} required/>
               <input  type="email"name="email" placeholder="Email" className={css.input}required/>
               <input type="text" name="password" placeholder="Password" className={css.input}required/>
               </div>
               <AuthButton children="Sign Up"/>
            </form>
            
        </>
)
}
export default SignUpForm;