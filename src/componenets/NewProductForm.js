import React, {useState} from "react";


function NewProductForm( {handleAddNewProduct}) {

    const [ name, setName] = useState("")
    const [ price, setPrice] = useState(0)
    const [ description, setDescription] = useState("")
    const [image_url, setImage_url] = useState("")
    
    

    function handleSubmit(e) {
        e.preventDefault()

    const productData = {
        name:name,
        price:price,
        description:description,
        image_url:image_url,
    }

    fetch("http://localhost:9292/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(productData)
    })
    .then((resp) => resp.json())
    .then((newProduct) => handleAddNewProduct(newProduct))
    

    setName("")
    setPrice(0)
    setDescription("")
    setImage_url("")
    
    }

return(
<div className= "add-new-product">

    <h1> New Product Info</h1>
    
    <form>
        <input 
         type="text" 
         name="name" 
         placeholder="Product name" 
         value = {name}
         onChange = {(e) => setName(e.target.value)}
        />

        <input 
         type="integer" 
         name="price" 
         placeholder="Product Price" 
         value = {price}
         onChange = {(e) => setPrice(e.target.value)}
        />

        <input 
         type="text" 
         name="description" 
         placeholder="Product Description" 
         value = {description}
         onChange = {(e) => setDescription(e.target.value)}
        />
    

        <input 
         type="text" 
         name="image_url" 
         placeholder="Product Image" 
         value = {image_url}
         onChange = {(e) => setImage_url(e.target.value)}
        />

       
        <button onClick = {handleSubmit}> Submit </button>
        </form>

    
    

</div>

)
}

export default NewProductForm