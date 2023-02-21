import React, {useState} from "react";

function ProductDetail({product}) {

const [ sold, setSold] = useState(true)

function handleSoldOut() {
    setSold((sold) => !sold)
  }

return(

    <div>
 <li className = "product">
    <img src = {product.image_url} alt = {"product name"} />
    <p>Name: {product.name} </p>
    <p> Price: ${product.price}</p>
    <p> Description: {product.description}</p>
    {sold ?( 
        <button onClick = {handleSoldOut} className = "primary">In Stock</button>
    ): (
        <button onClick = {handleSoldOut}> Sold </button>
    )}
 </li>
 </div>

)
}

export default ProductDetail