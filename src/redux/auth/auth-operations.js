import {createAsyncThunk,} from "@reduxjs/toolkit";
import {signup} from "../../servises/api/auth";
import {signin} from "../../servises/api/auth";

export  const register = createAsyncThunk("auth/register",
async(credentials,{rejectWithValue})=>{
    try{
     return await signup(credentials);
     
    }
    catch({response}){
    return rejectWithValue(response)
    }
})
export const login =  createAsyncThunk("auth/login",
async(credentials,{rejectWithValue})=>{
    try{
    return  await signin(credentials);
     
    }
    catch({response}){
return rejectWithValue(response)
    }
})
export const logout = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
    try {
      return await logout();
    } catch ({response}) {
      return rejectWithValue(response);
    }
  });