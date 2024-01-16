import TitlePage from 'components/TitlePage/TitlePage';
import { Daily } from 'components/daily/Daily';
import { UserProfile } from 'components/userCard/UserCard';
import { UserForm } from 'components/userForm/UserForm';
import { useEffect } from 'react';
import { getCurrentUserDataTh } from '../redux/UserPageCntrls/UserPageOperations';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.profile);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCurrentUserDataTh());
    //    console.log(currentUserData, 'currentUserData');
        // Обновляем состояние после получения данных
        // handleProfileUpdate(currentUserData);
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        // Добавьте обработку ошибки, например, отображение сообщения об ошибке или перенаправление на страницу входа
      }
    };

    fetchData();
  }, [dispatch]);

  // Показывать заглушку или другой контент, если данных нет
  if (!state) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>profile</p>
      <TitlePage children={'Profile Settings'} />
      <UserProfile name={state?.name} avatar={state?.avatarURL} />
      <div style={{ display: 'flex', margin: 'auto', gap: '20px' }}>
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
      <UserForm
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
  );
}
