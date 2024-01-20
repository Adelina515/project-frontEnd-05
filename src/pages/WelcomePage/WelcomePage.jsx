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
         {/* <div className={css.tutorialsWrapper}>
          <div className={css.videoTutorial}>
          <button type="button" className={css.playButton}>
            <svg className= {css.videoPlayer}>
              <use href={`${sprite}#icon-play`}></use>
            </svg>
           </button>
              <div className={css.textWrapper}>
            <span className={css.number}>350+</span>
            <span className={css.text}>Video tutorial</span>
            </div>
          </div>

          <div className={css.runningTutorial}>
            
            <div className={css.iconWrapper}>
              
           <svg className= {css.runningMan}>
              <use href={`${sprite}#icon-runningMan`}></use>
            </svg>
            </div>
          
              <div className={css.textCalWrapper}>
            <span className={css.numberCal}>500</span>
            <span className={css.textCal}>cal</span>
            </div>
          </div>  
          </div> */}
        </div>
      </div>  
    </div>
    
  );
};
export default WelcomePage;
