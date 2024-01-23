import css from './sign-up-page.module.css';
import { NavLink } from 'react-router-dom';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import TitlePage from '../../components/TitlePage/TitlePage';
import RemainderComponent from 'components/RemainderComponent/RemainderComponent';
import InfoBlock from "../../components/InfoBlock/InfoBlock";


const SignUpPage = ({ onSubmit }) => {
  return (
    <div className={css.heroContainer}>
    <div className={css.leftSide}>
     <TitlePage children="Sign Up" />
      <p className={css.text}>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <SignUpForm />
      <RemainderComponent children="Already have an account? " />
      <NavLink to="/signin" className={css.link}>
        Sign In
      </NavLink>
      </div>
      <div className={css.rightSide}>
      <InfoBlock />
      </div>
    </div>
    
  );
};
export default SignUpPage;
