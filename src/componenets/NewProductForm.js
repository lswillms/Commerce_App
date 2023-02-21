import React, {useState} from "react";

function NewProductForm( {handleAddNewProduct}) {

    const [ name, setName] = useState("")
    const [ price, setPrice] = useState(0)
    const [ description, setDescription] = useState("")
    const [image_url, setImage_url] = useState("")
    const [seller_name, setSeller_Name] = useState("")
    const [address, setAddress]= useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhone_Number] = useState("")
   

    function handleSubmit(e) {
        e.preventDefault()

    const productData = {
        name:name,
        price:price,
        description:description,
        image_url:image_url,
        seller_name:seller_name,
        address: address,
        email: email,
        phone_number: phone_number


    }

    fetch("http://localhost9292/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(productData)
    })
    .then((resp) => resp.json())
    .then((newProduct) => handleAddNewProduct(newProduct))
    }

return(
<div className= "add-new-product">

    <h1> New Product Info</h1>
    
    <form onSubmit ={handleSubmit}/>
        <input 
         type="text" 
         name="name" 
         placeholder="Product name" 
         value = {name}
         onChange = {(e) => setName(e.target.value)}
        />
<form onSubmit ={handleSubmit}/>
        <input 
         type="integer" 
         name="name" 
         placeholder="Product Price" 
         value = {price}
         onChange = {(e) => setPrice(e.target.value)}
        />
<form onSubmit ={handleSubmit}/>
        <input 
         type="text" 
         name="name" 
         placeholder="Product Description" 
         value = {description}
         onChange = {(e) => setDescription(e.target.value)}
        />
    
    <form onSubmit ={handleSubmit}/>
        <input 
         type="text" 
         name="name" 
         placeholder="Product Image" 
         value = {image_url}
         onChange = {(e) => setImage_url(e.target.value)}
        />
    <form onSubmit ={handleSubmit}/>
        <input 
         type="text" 
         name="seller name" 
         placeholder="Seller Name" 
         value = {seller_name}
         onChange = {(e) => setSeller_Name(e.target.value)}
        />

         <form onSubmit ={handleSubmit}/>
        <input 
         type="text" 
         name="address" 
         placeholder="Seller Address" 
         value = {address}
         onChange = {(e) => setAddress(e.target.value)}
        />
        <form onSubmit ={handleSubmit}/>
        <input 
         type="text" 
         name="email" 
         placeholder="Seller Email" 
         value = {email}
         onChange = {(e) => setEmail(e.target.value)}
        />
        <form onSubmit ={handleSubmit}/>
        <input 
         type="text" 
         name="phone number" 
         placeholder="Seller Phone Number" 
         value = {phone_number}
         onChange = {(e) => setPhone_Number(e.target.value)}
        />

      <button type="submit">Add Product</button>
    

</div>

)
}

export default NewProductForm