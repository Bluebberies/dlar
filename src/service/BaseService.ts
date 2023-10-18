import axios from "axios";
import {appConfig} from "../config/app-config.ts";

const ApiClient = (others: any) => {
        const token = others.getState().auth.token
        //axiosInstance
        const axiosInstance = axios.create({
            baseURL: appConfig.baseURL,
            withCredentials: false,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })

        //interceptors request
        axiosInstance.interceptors.request.use(function (config) {
            config.headers.Authorization =  `${token}`
            console.log("Headers ===> ", config.headers)
            console.log("Url ===> ", config.baseURL!! + config.url)
            console.log("Request ===> ", config.data)
            return config;
        }, function (error) {
            console.log("Request Error ===> ",error.message)
            return Promise.reject(error);
        });

        //interceptors response
        axiosInstance.interceptors.response.use((response)=>{
            console.log("Response ===> ",response.data)
            return response
        },(error)=>{
            console.log("Response Error ===> ",error.message)
            return Promise.reject(error)
        })
        return axiosInstance
}


export const BaseService = {
    appClient: ApiClient
}
