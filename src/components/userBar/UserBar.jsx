import css from './UserBar.module.css';
import sprite from '../../img/sprite/symbol-defs.svg';
import { BtnSettings } from 'btn/btnSettings/BtnSettings';
import { useSelector } from 'react-redux';

export const UserBar = () => {
  const avatar = useSelector(state => state.auth.user.avatarURL);
  return (
    <div className={css.userBar}>
      <BtnSettings />
      <div className={css.avatar}>
        {avatar ? (
          <img src={avatar} alt="avatar" className={css.avatarImg} />
        ) : (
          <svg className={css.avatarSvg}>
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        )}
      </div>
    </div>
  );
};
