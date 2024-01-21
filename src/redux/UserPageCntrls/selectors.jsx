export const selectUserParams = state => state.auth.user;
export const selectUsersAvatar = state => state.auth.user.avatarURL;
export const selectUserToken= (state)=>state.auth.token

// export const selectIsUpdating = state => state.auth.isUpdateUserData;