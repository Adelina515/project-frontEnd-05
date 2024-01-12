import css from "./sign-in-form.module.css";
import AuthButton from "../../btn/AuthButton/AuthButton";

const SignInForm = () =>{
    return(
        <>
<form className={css.form}>
              <input  type="email"name="email" placeholder="Email" className={css.input}required/>
               <input type="text" name="password" placeholder="Password" className={css.input}required/>
               <AuthButton children="Sign In"/>
            </form>
            </>
    )
}
export default SignInForm;