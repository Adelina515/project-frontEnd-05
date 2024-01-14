export const tokenState = (thunkAPI) => thunkAPI.getState().auth.token;
/*дозволяє отримати поточний токен зі стану Redux, який використовується для аутентифікації на бекенді */