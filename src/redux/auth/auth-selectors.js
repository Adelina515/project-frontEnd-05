export const selectIsUserLogin = state => state.auth.isLogin;
export const selectUser = state => state.auth.user;
export const selectUserToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectisParamsExist = state => state.auth.isParamsExist;