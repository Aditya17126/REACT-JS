import axios from "axios";

const api = axios.create({
   baseURL : "https://jsonplaceholder.typicode.com"
})

//? Get Method
export const getPost = () =>{
   return api.get("/posts")   
}

//? Delete Method
export const deletePost = (id)=>{
   return api.delete(`/posts/${id}`)
}

//? Post Method
export const postData = (data) =>{
  return api.post("/posts",data);
}

//? Put Method
export const updateData = (id , data)=>{
  return api.put(`/posts/${id}` , data);
}