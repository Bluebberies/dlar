import {BaseService} from "./BaseService.ts";

export class UserService {
    static readUserById = (query: string, others: any)=>{
        return BaseService.appClient(others).get(`/user?userId=${query}`)
    }

}