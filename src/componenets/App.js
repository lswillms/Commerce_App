import React, {useState, useEffect} from "react"
import ProductList from "./ProductList"
import 'semantic-ui-css/semantic.min.css'
import NewProductForm from "./NewProductForm"
import ProductDetails from "./ProductDetails"
import EditProduct from "./EditProduct"



function App() {
 
   const [ products, setProducts] = useState([])
   const [productID, setProductID] = useState(true)
  
  
   useEffect(() => {
    fetch("http://localhost:9292/products")
    .then((resp)=> resp.json())
    .then((data) => setProducts(data))
}, [])

   const addProductsToPage= products.map((product) => (
      <ProductDetails
      key = {product.id}
      product = {product}
      handleDeleteList = {handleDeleteList}
      products = {products}
      enterProductEditMode = {enterProductEditMode}
     
  />
      ))

    
   function handleAddNewProduct(newProduct) {
         setProducts([...products, newProduct])
     }

     function handleDeleteList(deletedItem) {
        const listAfterDelete= products.filter((product) => product.id !== deletedItem.id)
          setProducts((listAfterDelete))
     }


    function renderForm() {
      if(productID) {
      return <EditProduct 
      productID = {productID}
     />
    }else {
       return <NewProductForm
       updateProduct = { handleAddNewProduct}
       />
    }
  }

  function enterProductEditMode(id) {
    setProductID(id)
  }

return (
<div className="app">

<div>
  <ProductList addProductsToPage = {addProductsToPage}/>
  <NewProductForm/>
    {renderForm()}
  </div>
</div>
)
}

export default App
