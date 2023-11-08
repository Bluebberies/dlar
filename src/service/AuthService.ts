import {BaseService} from "./BaseService.ts";
import {LoginRequest} from "../model/request/auth/LoginRequest.ts";

export class AuthService {
    static login = (data: LoginRequest, others: any)=>{
        return BaseService.appClient(others).post("/auth/login", data)
    }

}