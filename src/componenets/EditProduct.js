import React, {useState} from "react";

function EditProduct({ price, name, description, image_url, handleUpdateProduct,product}) {

   const [ priceUpdate, setPriceUpdate] = useState(price)
    const [ nameUpdate, setNameUpdate] = useState(name)
   const [ descriptionUpdate, setDescriptionUpdate] = useState(description)
   const [image_urlUpdate, setImage_urlUpdate] = useState(image_url)

    function handleUpdateSubmit(e) {
        e.preventDefault()

        const productUpdateData = {
           priceUpdate:priceUpdate,
           nameUpdate:nameUpdate,
           descriptionUpdate:descriptionUpdate,
           image_urlUpdate:image_urlUpdate
        }

        fetch(`http://localhost:9292/products/${product.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            price,name,description,image_url:productUpdateData,
        })
    })
    .then((resp) => resp.json())
    .then((updatedProduct) => handleUpdateProduct(updatedProduct))
 
    }
return(
     <form className = "edit-product" onSubmit = {handleUpdateSubmit}>
        <h1>Edit Product</h1>
        <input 
         type="integer" 
         name="price" 
         placeholder="Product Price" 
         value = {priceUpdate}
         onChange = {(e) => setPriceUpdate(e.target.value)}
        />

<input 
         type="text" 
         name="name" 
         placeholder="Product Name" 
         value = {nameUpdate}
         onChange = {(e) => setNameUpdate(e.target.value)}
        />

         <input 
         type="text" 
         name="description" 
         placeholder="Product Description" 
         value = {descriptionUpdate}
         onChange = {(e) => setDescriptionUpdate(e.target.value)}
        />
    

        <input 
         type="text" 
         name="image_url" 
         placeholder="Product Image" 
         value = {image_urlUpdate}
         onChange = {(e) => setImage_urlUpdate(e.target.value)}
        />
        
         <input type="submit" value="Save" />
     </form>
    
)
}
export default EditProduct