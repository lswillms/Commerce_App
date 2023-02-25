import React, {useState} from "react";


function NewProductForm( {handleAddNewProduct}) {

    const [formData, setFormData] = useState({
        name:"",
        price:0,
        description:"",
        image_url:""
    })
    

    function handleSubmit(e) {
        e.preventDefault()


    fetch("http://localhost:9292/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formData)
    })
    .then((resp) => resp.json())
    .then((newProduct) => handleAddNewProduct(newProduct))
    setFormData({
        name: "",
        about: "",
        phase: "",
        link: "",
        image: "",
      });
}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
      };

return(
<div className= "add-new-product">

    <h1> New Product Info</h1>
    
    <form>
        <input 
         type="text" 
         name="name" 
         placeholder="Product name" 
         value = {formData.name}
         onChange = {handleChange}
        />

        <input 
         type="integer" 
         name="price" 
         placeholder="Product Price" 
         value = {formData.price}
         onChange = {handleChange}
        />

        <input 
         type="text" 
         name="description" 
         placeholder="Product Description" 
         value = {formData.description}
         onChange = {handleChange}
        />
    

        <input 
         type="text" 
         name="image_url" 
         placeholder="Product Image" 
         value = {formData.image_url}
         onChange = {handleChange}
        />

       
        <button onClick = {handleSubmit}> Submit </button>
        </form>

    
    

</div>

)
}

export default NewProductForm