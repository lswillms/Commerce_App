import React,{useState, useEffect} from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetails";

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

return (
    <main>
        <ProductList addProductsToPage = {addProductsToPage}/>
    </main>
)
}

export default ProductPage