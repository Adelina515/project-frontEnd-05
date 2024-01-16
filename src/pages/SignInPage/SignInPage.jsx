import css from "./sign-in-page.module.css";
import { NavLink} from "react-router-dom"; 
// import {useSelector} from 'react-redux';
import SignInForm from "../../components/SignInForm/SignInForm";
import TitlePage from "../../components/TitlePage/TitlePage";
import RemainderComponent from "components/RemainderComponent/RemainderComponent";
// import {selectUser} from "../../redux/auth/auth-selectors";

const SignInPage = () =>{
    
        return(
        <div className={css.container}>
         <TitlePage children="Sign In"/>
         <p className={css.text}>Welcome! Please enter your credentials to login to the platform:</p>
        <SignInForm/>
         <RemainderComponent children="Don't have an account? "/>
         <NavLink to="/signup" className={css.link} >Sign Up</NavLink>
         </div>
    )
}
export default SignInPage;