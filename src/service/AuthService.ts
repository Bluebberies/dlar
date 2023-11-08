import {BaseService} from "./BaseService.ts";
import {GetThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
// import { ThunkAction } from "@reduxjs/toolkit";

export class AuthService {
    static login = (others: GetThunkAPI<any>, data: object)=>{

        return BaseService.appClient(others).post("https://", data)
    }
}