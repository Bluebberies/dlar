import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthService} from "../../service/AuthService.ts";
import {LoginRequestProps} from "../../model/request/auth/LoginRequest.ts";

const initialState = {
    token: null,
    loading: false
}

const action = {
    login:createAsyncThunk("auth/action/login",  async (data: LoginRequestProps, {rejectWithValue, ...props})=>{
        try {
            const response = await AuthService.login(data, {...props})
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.response.message)
        }
    })
}
const slice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        updateToken: (state, action)=>{
            state.token = action.payload
        },
        updateLoading: (state, action)=>{
            state.loading = action.payload
        },
    },
    extraReducers: (builder)=>{
        builder
            .addCase(action.login.pending, (state)=>{
                state.loading = false
            })
            .addCase(action.login.fulfilled, (state, action: PayloadAction<any>)=>{
                state.token = action.payload.token
                state.loading = false
            })
    }
})

export const auth={
    reducer: slice.reducer,
    action: action,
    mutation: slice.actions
}