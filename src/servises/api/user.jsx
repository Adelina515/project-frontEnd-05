import instance from '../../instance/instance';
import { setToken } from '../../instance/instance';
import { getCurrentUser } from '../api/auth';

export const updateProfileAvatar = async ({ avatar, userToken }) => {
  console.log(avatar, 'newParams');
  // console.log(userToken, 'userToken in Avatar');

  try {
    setToken(userToken);

    const formData = new FormData();
    formData.append('avatar', avatar);

    const res = await instance.patch('auth/avatars', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    // console.log(res.data, 'res.data in update Avatar');
    return res.data;
  } catch (error) {
    console.error('Ошибка при обновлении параметров профиля:', error);
    throw error;
  }
};

export const updateProfileParams = async ({ newParams, userToken }) => {
  // console.log(newParams, 'newParams');
  try {
    setToken(userToken);
    // console.log(userToken, 'userToken in UpdateProfile');
    // console.log(newParams, 'newParams in UpdateProfile');
    const currentUserParams = await getCurrentUser(userToken);

    const changes = {};

    if (newParams.height !== currentUserParams.height) {
      changes.height = newParams.height;
    }

    if (newParams.blood !== currentUserParams.blood) {
      changes.blood = newParams.blood;
    }

    if (newParams.sex !== currentUserParams.sex) {
      changes.sex = newParams.sex;
    }

    if (newParams.levelActivity !== currentUserParams.levelActivity) {
      changes.levelActivity = newParams.levelActivity;
    }

    if (newParams.currentWeight !== currentUserParams.currentWeight) {
      changes.currentWeight = newParams.currentWeight;
    }

    if (newParams.desiredWeight !== currentUserParams.desiredWeight) {
      changes.desiredWeight = newParams.desiredWeight;
    }

    // Если есть изменения, отправляем PATCH-запрос
    if (Object.keys(changes).length > 0) {
      //  console.log('changes>0');
      const response = await instance.patch('auth/params', newParams);
      return response.data;
    } else {
      console.log('Нет изменений в параметрах профиля.');
    }
  } catch (error) {
    console.error('Ошибка при обновлении параметров профиля:', error);
    throw error;
  }
};
