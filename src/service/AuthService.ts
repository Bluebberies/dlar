import {BaseService} from "./BaseService.ts";
import {LoginRequestProps} from "../model/request/auth/LoginRequestProps.ts";

export class AuthService {
    static login = (data: LoginRequestProps, others: any)=>{
        return BaseService.appClient(others).post("https://", data)
    }

}