import css from "./welcome-page.module.css";
import { NavLink } from "react-router-dom";
import sprite from "../../img/sprite/symbol-defs.svg";


const WelcomePage=()=>{
    return(
        <div className={css.container}>
        <div className={css.wrapper}>
         <h1 className={css.mainTitle}>Transforming your body shape with Power Pulse</h1>
          
          <svg className={css.iconLoop} width="98px" height="35px">
          <use href ={`${sprite}#icon-loop`}></use>
          </svg>
          </div>
          <div className={css.btnList}>
          <NavLink
            to="/signup"
            className={css.btnSignUp}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signin"
            className={css.btnSignIn}
          >
            Sign In
          </NavLink>
        </div>   
        </div>
    )
}
export default WelcomePage;