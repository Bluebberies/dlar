import {BaseService} from "./BaseService.ts";

export class AuthService {
    static login = (others: any, data: object)=>{

        return BaseService.appClient(others).post("https://", data)
    }
}