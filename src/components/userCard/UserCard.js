import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserCard.module.css'
import { selectUsersAvatar, selectUser } from '../../redux/UserPageCntrls/selectors.jsx';

 import { updateAvatar } from '../../redux/UserPageCntrls/UserPageCntrls.jsx';
import svg from "../../../src/assets/spriteSvg.svg"
import tryalUserImg from "../../assets/logo-removebg-preview.png"
import capy from "../../assets/capi_negate.jpg" 

export const UserProfile = () => {
  const dispatch = useDispatch();
  const userAvatar = useSelector(selectUsersAvatar);
 const [avatar, setAvatar] = useState(userAvatar.avatarURL);

  const avatarUser = <img src={tryalUserImg} width="10%" alt="Avatar" />;
  const avatarStandart =  <img src={capy} width="10%" alt="Avatar" />;

  const handleAvatarChange = event => {
    // console.log("handleAvatarChange")
     const file = event.target.files[0];
    // console.log("handleAvatarChange", file)
     if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      console.log(objectURL, "objectURL") 
     setAvatar(objectURL);
     }

    try {
      dispatch(updateAvatar(file));
      console.log(file);
    } catch (error) {
      console.error('Ошибка при отправке файла на сервер', error);
    }
  };

  return (
    <div >
      <div>
       {avatarUser ? avatarUser : avatarStandart} 
      </div>
      <form id="upload-form">
        <input type="file" id="file-input" name="file" style={{ display: 'none' }} onChange={handleAvatarChange} />
        <label htmlFor="file-input">
          <div>
            <svg width="24" height="24" viewBox= "0 0 24 24" >
              <use xlinkHref={`${svg}#github1`}></use>
            </svg>
          </div>
        </label>
      </form>
      <p>{"user.name(Anna Rybachok)"}</p>
      <p>User</p>


      <div className={styles.dailyContainer}>
      <div className="wrapper">
        <svg className="svg-icon">
          <use href={`${svg}#linkedin`} />
        </svg>
        <p className="text">"text"</p>
      </div>
      <p className="value">""value"</p>
    </div>

    <div className="daily-container">
      <div className="wrapper">
        <svg className="svg-icon">
          <use href={`${svg}#linkedin`} />
        </svg>
        <p className="text">"text"</p>
      </div>
      <p className="value">""value"</p>
    </div>

    </div>
  );
};


// import PropTypes from 'prop-types';


// Daily.propTypes = {
//   color: PropTypes.string.isRequired,
//   iconId: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

// export default Daily;
