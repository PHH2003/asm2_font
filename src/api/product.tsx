import Iproduct from "../interface/product";
import instance from "./instance";
export const getAll=()=>{
    return instance.get("/products")
}
export const getOne=(id:string)=>{
    return instance.get("/products/"+id)
}
export const addproduct=(data:Iproduct)=>{
    return instance.post("/products",data)
}
export const deleteproduct=(id:string)=>{
    return instance.delete("/products/"+id)
}
export const updateproduct=(data:Iproduct)=>{
    return instance.put("/products/"+data._id,data)
}