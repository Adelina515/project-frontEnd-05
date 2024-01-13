import css from "./sign-up-form.module.css";
// import {Formic,Form,Field,ErrorMessage} from "formik";
import AuthButton from "../../btn/AuthButton/AuthButton";
const SignUpForm=()=>{
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