import css from "./sign-in-form.module.css";
import AuthButton from "../../btn/AuthButton/AuthButton";

const SignInForm = () =>{

    // const initialValues = {
    //     email:"",
    //     password:""
    // }
    return(
        <>
<form className={css.form}>
            <div className={css.inputWrapper}>
              <input  type="email"name="email" placeholder="Email" className={css.input}required/>
               <input type="text" name="password" placeholder="Password" className={css.input}required/>
               </div>
               <AuthButton children="Sign In"/>
            </form>
            </>
    )
}
export default SignInForm;