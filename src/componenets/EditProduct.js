import React, {useState,useEffect} from "react";

function EditProduct({ productID, editProduct}) {

    const [formData, setFormData] = useState({
        name:"",
        price:0,
        description:"",
        image_url:"",
        seller_id:0,
        seller: {
            seller_name:"",
            address:"",
            email:"",
            phone_number:""
        }
    })

    useEffect(() => {
        fetch(`http://localhost:9292/products/${productID}`)
        .then((resp)=> resp.json())
        .then((data) => setFormData(data))
    }, [productID])

    function handleChange(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/products/${productID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formData)
    })
    .then((resp) => resp.json())
    .then((data) => editProduct(data))
    }

return(
     <form className = "edit-product" onSubmit = {handleSubmit} >
        <h1>Edit Product</h1>
        <input 
         type="integer" 
         name="price" 
         id= "price"
         placeholder="Product Price" 
         value = {formData.price}
         onChange = {handleChange}
        />

<input 
         type="text" 
         name="name" 
         id = "name"
         placeholder="Product Name" 
         value = {formData.name}
         onChange = {handleChange}
        />

         <input 
         type="text" 
         name="description" 
         id = "description"
         placeholder="Product Description" 
         value = {formData.description}
         onChange = {handleChange}
        />
    

        <input 
         type="text" 
         name="image_url" 
         id = "image_url"
         placeholder="Product Image" 
         value = {formData.image_url}
         onChange = {handleChange}
        />
        <input 
         type="text" 
         name="seller_id" 
         id = "seller_id"
         placeholder="Seller ID" 
         value = {formData.seller_id}
         onChange = {handleChange}
        />
        <input 
         type="text" 
         name="image_url" 
         id = "seller name"
         placeholder="Seller Name" 
         value = {formData.seller.seller_name}
         onChange = {handleChange}
        />

        <input 
         type="text" 
         name="image_url" 
         id = "seller name"
         placeholder="Seller Address" 
         value = {formData.seller.address}
         onChange = {handleChange}
        />

        <input 
         type="text" 
         name="email" 
         id = "seller email"
         placeholder="Seller Email" 
         value = {formData.seller.email}
         onChange = {handleChange}
        />
        <input 
         type="text" 
         name="email" 
         id = "seller email"
         placeholder="Seller Phone Number" 
         value = {formData.seller.phone_number}
         onChange = {handleChange}
        />
        
        
         <input type="submit" value="Save" />
     </form>
    
)
}
export default EditProduct