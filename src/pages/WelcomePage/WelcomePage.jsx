import css from './welcome-page.module.css';
import { NavLink } from 'react-router-dom';
import sprite from '../../img/sprite/symbol-defs.svg';
import InfoBlock from "../../components/InfoBlock/InfoBlock";

const WelcomePage = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.leftSide}>
        <div className={css.contentWrapper}>
          <h1 className={css.mainTitle}>
            Transforming your body shape with Power Pulse
          </h1>
          <svg className={css.iconLoop} width="98px" height="35px">
            <use href={`${sprite}#icon-loop`}></use>
          </svg>
          </div>
      <div className={css.btnList}>
          <NavLink to="/signup" className={css.btnSignUp}>
            Sign Up
          </NavLink>
          <NavLink to="/signin" className={css.btnSignIn}>
            {' '}
            Sign In
          </NavLink>
        </div>
        
      
      
      <div className={css.rightSide}>
        <InfoBlock />
         
            
        </div>
      </div>  
    </div>
    
  );
};
export default WelcomePage;
