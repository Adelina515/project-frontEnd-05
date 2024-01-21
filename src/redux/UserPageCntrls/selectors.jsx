export const selectUser = state => state.auth.user;
export const selectUsersAvatar = state => state.auth.user.avatarURL;
export const selectUserToken= (state)=>state.auth.token
export const selectUsersBmr = state => state.auth.user.bmr;
// export const selectIsUpdating = state => state.auth.isUpdateUserData;