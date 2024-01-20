import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserCard.module.css';
import { selectUsersAvatar } from '../../redux/UserPageCntrls/selectors.jsx';
import sprite from '../../img/sprite/symbol-defs.svg';
import { updateProfileAvatarTh } from '../../redux/UserPageCntrls/UserPageOperations';
import toast from 'react-hot-toast';

export const UserProfile = ({ name, avatar, userToken }) => {
  const dispatch = useDispatch();
  const userAvatar = useSelector(selectUsersAvatar);
  const [avatarURL, setAvatarURL] = useState();

  useEffect(() => {
    setAvatarURL(avatar);
  }, [avatar]);

  const avatarUser = (
    <img src={avatarURL || userAvatar} className={css.photo} width="100%" alt="Avatar" />
  );

  const avatarStandart = (
    <svg fill="#000" width="62" height="62">
      <use href={`${sprite}#icon-user`}></use>
    </svg>
  );

  const handleAvatarChange = async (event) => {
    const avatar = event.target.files[0];

    if (avatar) {
      const blob = new Blob([avatar]);
      const objectURL = URL.createObjectURL(blob);
      setAvatarURL(objectURL);

      try {
        await dispatch(updateProfileAvatarTh({ avatar, userToken }));
        toast.success('Avatar updated successfully!', { duration: 3000 });
      } catch (error) {
        toast.error('Error updating avatar. Please try again.', { duration: 3000 });
        console.error('Error updating avatar:', error);
      }
    }
  };

  return (
    <div className={css.wrapperPage} style={{ backgroundColor: '#040404' }} >
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
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </svg>
          </div>
        </label>
      </form>
      <p className={css.titleName}>{name}</p>
      <p className={css.subtitle}>User</p>
    </div>
  );
};
