import axios from "axios";

export const BaseService = (others: any) => {
    const axiosInstance =  axios.create({
          baseURL: "https://",
          headers:{
              "Content-Type": "application/json",
              Accept:"application/json",
              // Authorization: `Bearer ${token}`
          }
      })

    axiosInstance.interceptors.response.use((response)=>{
        console.log(response.data)
        return response
    },(error)=>{
        console.log(error.message)
        return Promise.reject(error)
    })
    axiosInstance.interceptors.request.use((config)=>{
        console.log(config)
        return config
    }, (error)=> {
        console.log(error)
        return Promise.reject(error)
    })

    return axiosInstance
}