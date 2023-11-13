import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReadUserByIdResponseProps} from "@/model/response/user/ReadUserByIdResponse.ts";
import {UserService} from "@/service/UserService.ts";

const initialState = {
    loading: false,
    userData: {}
}

const action = {
    readUserById:createAsyncThunk("auth/action/login",  async (query: string, {rejectWithValue, ...props})=>{
        try {
            const response = await UserService.readUserById(query, {...props})
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.response.message)
        }
    })
}
const slice = createSlice({
    name: "user",
    initialState,
    reducers:{
        updateUserData: (state, action)=>{
            state.userData = action.payload
        },
        updateLoading: (state, action)=>{
            state.loading = action.payload
        },
    },
    extraReducers: (builder)=>{
        builder
            .addCase(action.readUserById.pending, (state)=>{
                state.loading = false
            })
            .addCase(action.readUserById.fulfilled, (state, action: PayloadAction<ReadUserByIdResponseProps>)=>{
                if (action.payload.responseCode === "100"){
                    state.userData = action.payload.responseData
                }
                state.loading = false
            })
    }
})

export const user={
    reducer: slice.reducer,
    action: action,
    mutation: slice.actions
}