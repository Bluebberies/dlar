import {BaseService} from "./BaseService.ts";
import {GetThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";

export class AuthService {
    static login = (others: GetThunkAPI<any>, data: object)=>{

        return BaseService.appClient(others).post("https://", data)
    }
}