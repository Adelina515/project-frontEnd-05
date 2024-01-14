import {createSlice} from "@reduxjs/toolkit";
import {register} from "./auth-operations";
import {login} from "./auth-operations";
import {logout} from "./auth-operations";
const initialState = {
    user:{},
    token:"",
    loading:false,
    isLogin:false,
    error:null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers: builder=>{
        builder.addCase(register.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(register.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin=true;
        })
        .addCase(register.rejected,(state,{payload})=>{
            state.loading = false;
            state.error = {
                status: payload.status,
                message: payload.statusText,
                contentType: payload.headers && payload.headers['content-type'],
              };
    })
        .addCase(login.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin=true;
        })
        .addCase(login.rejected,(state,{payload})=>{
            state.loading = false;
            state.error = payload;
        })
        .addCase(logout.pending, (state)=>{
            state.loading = false;
            state.error = null;
        })
      .addCase(logout.fulfilled, (state, {payload}) => {
        state.user = { name: null, email: null };
        state.token = "";
        state.isLogin = false;
        state.isLogin = false;
      })
      .addCase(logout.rejected,(state,{payload})=>{
        state.loading = false;
        state.error=payload;
      })
       
       
    }

})
export const authReducer = authSlice.reducer;
