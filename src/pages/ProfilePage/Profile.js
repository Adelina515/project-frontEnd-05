import TitlePage from 'components/TitlePage/TitlePage';
import { Daily } from 'components/daily/Daily';
import { UserProfile } from 'components/userCard/UserCard';
import { UserForm } from 'components/userForm/UserForm';


import {  useSelector } from 'react-redux';
import { LogOutBtn } from 'btn/logOutBtn/LogOutBtn';



import {selectUserToken} from '../../redux/UserPageCntrls/selectors';

import css from './ProfilePage.module.css'

import { ExclamationMark } from 'components/exclamation/Exclamation';


export default function Profile() {


  const state = useSelector(state => state.auth.user);
  console.log(state, "state in profile")
  const userToken = useSelector(selectUserToken);


  if (!state) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.container}>
      <TitlePage children={'Profile Settings'} />
      <div className={css.containerMini}> 
      <div className={css.forUp} > 
      <UserProfile
        name={state?.name}
        avatar={state?.avatarURL}
        userToken={userToken}
      />
      <div className={css.wrapper}>
        <Daily
          color="#E6533C"
          iconId={'icon-fork-filled'}
          text={'Daily calorie intake'}
          value={state?.bmr}
        />
        <Daily
          color="#E6533C"
          iconId={'icon-fork-filled'}
          text={'Daily physical activity'}
          value={'110 min'}
        />
      </div>
      <ExclamationMark />
      <LogOutBtn/></div>
      <UserForm
        userToken={userToken}
        name={state.name}
        height={state.height}
        currentWeight={state.currentWeight}
        desiredWeight={state.desiredWeight}
        birthday={state.birthday}
        blood={state.blood}
        sex={state.sex}
        levelActivity={state.levelActivity}
        email={state.email}
      />
    </div>
    </div>
  );
}
