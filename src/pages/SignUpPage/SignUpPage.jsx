import css from "./sign-up-page.module.css";
import { NavLink } from "react-router-dom";
// import {useDispatch} from "react-redux";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import TitlePage from "../../components/TitlePage/TitlePage";
import RemainderComponent from "components/RemainderComponent/RemainderComponent";
// import {register} from "../../redux/auth/auth-operations";


const SignUpPage=({onSubmit})=>{
    // const dispatch = useDispatch();
    // const handleSignUp = (data) =>{
    //     dispatch(register(data))
    // }
    return(
        <div className={css.container}>
         <TitlePage children="Sign Up"/>
         <p className={css.text} >Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</p>
         <SignUpForm />
        <RemainderComponent children="Already have an account? "/>
        <NavLink to="/signin" className={css.link} >Sign In</NavLink>
        </div>
    )
}
export default SignUpPage;