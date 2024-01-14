import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserCard.module.css';
import {
  selectUsersAvatar
} from '../../redux/UserPageCntrls/selectors.jsx';  /// selectUser,
import sprite from "../../img/sprite/symbol-defs.svg"

import { updateAvatar } from '../../redux/UserPageCntrls/UserPageCntrls.jsx';


export const UserProfile = () => {
  const dispatch = useDispatch();
  const userAvatar = useSelector(selectUsersAvatar);
  const [avatarURL, setAvatarURL] = useState(userAvatar);

  const avatarUser = <img src={avatarURL} className={css.photo} width="100%" alt="Avatar" />;
  const avatarStandart = (
<svg fill="#000" width="62" height="62">
<use href={`${sprite}#icon-user`}></use>
</svg>)


  const handleAvatarChange = event => {
    // console.log("handleAvatarChange")
    const file = event.target.files[0];
    // console.log("handleAvatarChange", file)
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      console.log(objectURL, 'objectURL');
      setAvatarURL(objectURL);
    }

    try {
      dispatch(updateAvatar(file));
      console.log(file);
    } catch (error) {
      console.error('Ошибка при отправке файла на сервер', error);
    }
  };

  return (
    <div className={css.wrapperPage} style={{ backgroundColor: "#040404" }}>
    

      <div className={css.avatar}>{avatarURL ? avatarUser : avatarStandart}</div>

      <form id="upload-form">
        <input
          type="file"
          id="file-input"
          name="file"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />

        <label htmlFor="file-input">
         
          <div className={css.button}>
<svg width="24" height="24" viewBox="0 0 24 24">
              <use xlinkHref={`${sprite}#icon-plus`}></use> </svg> 
          </div>
        </label>
      </form>

      <p className={css.titleName}>{'Anna Rybachok'}</p>
      <p className={css.subtitle}>User</p>

   
    </div>
  );
};

