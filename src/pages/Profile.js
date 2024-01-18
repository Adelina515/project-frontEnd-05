import TitlePage from 'components/TitlePage/TitlePage';
import { Daily } from 'components/daily/Daily';
import { UserProfile } from 'components/userCard/UserCard';
import { UserForm } from 'components/userForm/UserForm';

import { useDispatch, useSelector } from 'react-redux';
import { LogOutBtn } from 'btn/logOutBtn/LogOutBtn';

import { logout } from '../servises/api/auth';
 import {selectUserToken} from '../redux/UserPageCntrls/selectors';

export default function Profile() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth.user);
   const userToken=useSelector(selectUserToken)
   console.log(userToken, "userToken")
  console.log(state, "state in PP")

  const onLogout =() =>{
    dispatch(logout())
  }


  
  if (!state) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>profile</p>
      <TitlePage children={'Profile Settings'} />
      <UserProfile name={state?.name} avatar={state?.avatarURL} userToken = {userToken}/>
      <div >
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
     <div>
      <svg>

      </svg>
      <p>We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.</p>
     </div>
      </div> 
      <LogOutBtn onLogout={onLogout} />
      <UserForm
      userToken = {userToken}
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
