export const selectUser = state => state.profile;
export const selectUsersAvatar = state => state.profile.avatarURL;
export const selectUserToken= (state)=>state.auth.token

// export const selectIsUpdating = state => state.auth.isUpdateUserData;