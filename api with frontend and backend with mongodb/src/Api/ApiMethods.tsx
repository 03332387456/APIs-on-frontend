import axios from "axios";

export const apiHandle = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        Authorization: "Bearer YOUR_TOKEN_HERE", 
      },
})

export const Get = (endpoint : any, id ? : any) => {
    return apiHandle.get(`${endpoint}/${id ? id : ''}`)
}
// export const Post = (endpoint : any, id : any) => {
//     return apiHandle.post(`${endpoint}/${id ? id : ''}`)
// }
export const Post = (endpoint: string, data: any) => {
    return apiHandle.post(endpoint, data);
  }
export const Put = (endpoint : any, id : any) => {
    return apiHandle.put(`${endpoint}/${id ? id : ''}`)
}
export const Delete = (endpoint: any, id = "") => {
    return apiHandle.delete(`${endpoint}/${id}`);
  }