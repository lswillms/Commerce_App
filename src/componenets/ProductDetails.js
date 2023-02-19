import React, {useState} from "react";

function ProductDetail({product}) {

const [ sold, setSold] = useState(true)

function handleSoldOut() {
    setSold((sold) => !sold)
  }

return(
 <li className = "product">
    <img src = {product.image_url} alt = {"product name"} />
    <h4>{product.name} </h4>
    <p> Price: {product.price}</p>
    <p> Description: {product.description}</p>
    {sold ?( 
        <button onClick = {handleSoldOut} className = "primary">In Stock</button>
    ): (
        <button onClick = {handleSoldOut}> Out of Stock </button>
    )}
 </li>

)
}

export default ProductDetail