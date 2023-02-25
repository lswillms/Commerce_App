import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import EditProduct from "./EditProduct";


function ProductDetail({product, handleDeleteList, onUpdateProduct, enterProductEditMode}) {
  


 function handleDeleteClick() {
    fetch(`http://localhost:9292/products/${product.id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => handleDeleteList(product))
  }

  function handleUpdateProduct(updatedMessage) {
    onUpdateProduct(updatedMessage)

  }
  
  function handleEditClick() {
    enterProductEditMode(product.id)
  }


return(
<div>
 <Card.Group className = "ui cards">
    <Card>
    <Card.Content>
    <Image src = {product.image_url} alt = {"product name"} wrapped ui={true} />
    <Card.Header>
    <header> {product.name} </header>
    </Card.Header>
    <Card.Description>
    <p> Price: ${product.price}</p>
    <p> Description: {product.description}</p>
    {/* <p>Seller: {product.seller.seller_name}</p>
    <p>Email: {product.seller.email}</p>
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