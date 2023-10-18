import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthService} from "../../service/AuthService.ts";

const initialState = {
    token: null,
    isLoading: false
}

const action = {
    login:createAsyncThunk("auth/authAction/login",  (arg: object, thunkAPI)=>{
        AuthService.login(thunkAPI, arg).then((response)=>{
            return response.data
        }).catch((reason)=>{
            return reason.message
        })
    })
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(action.login.pending, (state)=>{
                state.isLoading = false
            })
            .addCase(action.login.fulfilled, (state, action: PayloadAction<any>)=>{
                state.token = action.payload.token
                state.isLoading = false
            })
    }
})

export const auth={
    reducer: authSlice.reducer,
    action: action,
}