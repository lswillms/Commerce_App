import React,{useState, useEffect} from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetails";
import NewProductForm from "./NewProductForm";

function ProductPage() {

const [ products, setProducts] = useState([])

useEffect(() => {
    fetch("http://localhost:9292/products")
    .then((resp)=> resp.json())
    .then((data) => setProducts(data))
}, [])

const addProductsToPage= products.map((product) => (
    <ProductDetail
    key = {product.id}
    product = {product}
/>
    ))

function handleAddNewProduct(newProduct) {
    setProducts([...products, newProduct])
}

return (
    <main>
        <ProductList addProductsToPage = {addProductsToPage}/>
        <NewProductForm handleAddNewProduct = {handleAddNewProduct}/>
    </main>
)
}

export default ProductPage