import { Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ListProduct from "./pages/admin/ListProduct"
import { useEffect, useState } from "react"
import { getAll } from "./api/product"
import Iproduct from "./interface/product"


function App() {
  const [products,setProducts]=useState<Iproduct[]>([])
  console.log(products)
  useEffect(()=>{
 getAll().then(({data})=>setProducts(data))
  },[])

  return (
   <Routes>
    <Route path="/">
     <Route index element={<HomePage/>}/> 
     <Route path="admin/product">
     <Route index element={<ListProduct product={products}/>}/>
     </Route>
    </Route>
   </Routes>
  )
}

export default App
