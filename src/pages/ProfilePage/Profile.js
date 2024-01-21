import TitlePage from 'components/TitlePage/TitlePage';
import { Daily } from 'components/daily/Daily';
import { UserProfile } from 'components/userCard/UserCard';
import { UserForm } from 'components/userForm/UserForm';

import {  useSelector } from 'react-redux';
import { LogOutBtn } from 'btn/logOutBtn/LogOutBtn';
// import { selectIsUserLogin } from '../redux/auth/auth-selectors';
// import { logout } from '../../servises/api/auth';

import {selectUserToken} from '../../redux/UserPageCntrls/selectors';

import css from './ProfilePage.module.css'

import { ExclamationMark } from 'components/exclamation/Exclamation';
// import { current } from '../../redux/auth/auth-operations';
// import { useEffect } from 'react';

export default function Profile() {
// const dispatch = useDispatch();
  const state = useSelector(state => state.auth.user);
  console.log(state, "state in profile")
  const userToken = useSelector(selectUserToken);

  // const onLogout = () => {
  //   dispatch(logout());
  // };

  //   useEffect(() => {

  //     const fetchData = async () => {
  //       try {
  //         await dispatch(current());
  //     //    console.log(currentUserData, 'currentUserData');
  //         // Обновляем состояние после получения данных
  //         // handleProfileUpdate(currentUserData);
  //       } catch (error) {
  //         console.error('Ошибка при получении данных пользователя:', error);
  //         // Добавьте обработку ошибки, например, отображение сообщения об ошибке или перенаправление на страницу входа
  //       }
  //     };

  //     fetchData(userToken);

  // },[dispatch, userToken]);

  // Показывать заглушку или другой контент, если данных нет
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
