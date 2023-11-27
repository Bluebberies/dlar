import {BaseService} from "./BaseService.ts";
import {LoginRequestProps} from "../model/request/auth/LoginRequest.ts";

export class AuthService {
    static login = (data: LoginRequestProps, others: any)=>{
        return BaseService.appClient(others).post("/auth/login", data)
    }
}