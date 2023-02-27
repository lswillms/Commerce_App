import React from "react";
import { Card, Button, Image } from "semantic-ui-react";



function ProductDetail({product, handleDeleteList,enterProductEditMode}) {
  
const { id, name, price, description, image_url} = product

 function handleDeleteClick() {
    fetch(`http://localhost:9292/products/${id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => handleDeleteList(product))
  }
  
  function handleEditClick() {
    enterProductEditMode(id)
  }


return(
<div>
 <Card.Group className = "ui cards">
    <Card>
    <Card.Content>
    <Image src = {image_url} alt = {"product name"} wrapped ui={true} />
    <Card.Header>
    <header> {name} </header>
    </Card.Header>
    <Card.Description>
    <p> Price: ${price}</p>
    <p> Description: {description}</p>
    <p>Seller: {product.seller.seller_name}</p>
    {/* <p>Email: {product.seller.email}</p>
    <p>Address: {product.seller.address}</p>
    <p>Phone Number: {product.seller.phone_number}</p> */}
    </Card.Description>
      <Button onClick = {handleDeleteClick}>Delete</Button>
      <Button onClick={handleEditClick}>Edit</Button>
    </Card.Content>
 </Card>
 </Card.Group>
 </div>


)
}

export default ProductDetail