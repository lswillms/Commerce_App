import React, {useState, useEffect} from "react"
import ProductList from "./ProductList"
import 'semantic-ui-css/semantic.min.css'
import NewProductForm from "./NewProductForm"
import ProductDetails from "./ProductDetails"
import EditProduct from "./EditProduct"



function App() {
 
   const [ products, setProducts] = useState([])
   const [productID, setProductID] = useState(false)
  
  
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

    const seller_info  = products.map((product)=> 
        <option key = {product.id}>{product.seller_id} :{product.seller.seller_name}
        </option>
        )   

    
   function handleAddNewProduct(newProduct) {
         setProducts([...products, newProduct])
     }

     function handleDeleteList(deletedItem) {
        const listAfterDelete= products.filter((product) => product.id !== deletedItem.id)
          setProducts((listAfterDelete))
     }

    function editProduct(updatedProduct){
      setProducts(prevProducts =>  {
        const newProductArray = prevProducts.map(product => {
          if (product.id === updatedProduct.id){
            return updatedProduct
          }else {
            return product
          }
        })
        return newProductArray
      })
      setProductID(false)
    }


    function renderForm() {
      if(productID) {
         return <EditProduct
      productID = {productID}
      editProduct = {editProduct}
      seller_info = {seller_info}
     />
    }else {
         return <NewProductForm
       updateProduct = { handleAddNewProduct}
       products = {products}
       seller_info = {seller_info}
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
    {renderForm()}
  </div>
</div>
)
}

export default App
