import React, {useState, useEffect} from "react"
import ProductList from "./ProductList"
import {Route, Routes} from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import NewProductForm from "./NewProductForm"
import NavBar from "./NavBar"
import ProductDetails from "./ProductDetails"


function App() {
 
   const [ products, setProducts] = useState([])

   useEffect(() => {
       fetch("http://localhost:9292/products")
       .then((resp)=> resp.json())
       .then((data) => setProducts(data))
   }, [])

   const addProductsToPage= products.map((product) => (
      <ProductDetails
      key = {product.id}
      product = {product}
  />
      ))

   function handleAddNewProduct(newProduct) {
         setProducts([...products, newProduct])
     }


return (
<div className="app">
<div>
<NavBar/>
      <Routes>
      <Route  path = "/productlist" element={<ProductList addProductsToPage = {addProductsToPage}/>}>
      </Route>
        <Route  path = "/newproductform" element={<NewProductForm handleAddNewProduct = {handleAddNewProduct}/>}>
       </Route>
      </Routes>
      </div>
</div>
)
}

export default App
