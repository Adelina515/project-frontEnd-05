import css from "./welcome-page.module.css";
import { NavLink } from "react-router-dom";

const WelcomePage=()=>{
    return(
        <div className={css.container}>
         <h1 className={css.mainTitle}>Transforming your <span className={css.part}>body</span> shape with Power Pulse</h1>
         <div className={css.btnList}>
          <NavLink
            to="signup"
            className={css.btnSignUp}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="signin"
            className={css.btnSignIn}
          >
            Sign In
          </NavLink>
        </div>   
        </div>
    )
}
export default WelcomePage;