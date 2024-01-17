import axios from 'axios';

const baseURL = 'https://power-pulse-backend.onrender.com';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTRkYTcxYWQ0Yjg5N2Y3ZWY5MTY4OSIsImlhdCI6MTcwNTM4OTQyNiwiZXhwIjoxNzA1NDcyMjI2fQ.an1dqHlkw_ABwvhptFskr2RYBylQNGu0FY4InOaHfrc'
  
// const selectUserToken= (state)=>state.auth.token


export const instance = axios.create({
  baseURL: `${baseURL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const setToken = token => {
    
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {

  instance.defaults.headers.common.Authorization = '';
};

export const getCurrentUserData = async ({userToken}) => {

    
     setToken(userToken);

  const response = await instance.get('auth/current'); 
  return response.data; 
};

export const updateProfileAvatar = async ({avatar, userToken}) => {
  console.log(avatar, 'newParams');
  console.log(userToken, "userToken in Avatar")

 
  try {
  
    setToken(userToken);
   

    const formData = new FormData();
    formData.append('avatar', avatar);

    const res = await instance.patch('auth/avatars', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    console.log(res.data, 'res.data in update Avatar');
    return res.data;
  } catch (error) {
    console.error('Ошибка при обновлении параметров профиля:', error);
    throw error;
  }
};

export const updateProfileParams = async ({newParams, userToken}) => {
 // console.log(newParams, 'newParams');
  try {
 
    setToken(userToken);
    console.log(userToken, "userToken in UpdateProfile")
    console.log(newParams, "newParams in UpdateProfile")
    const currentUserParams = await getCurrentUserData({userToken});

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
