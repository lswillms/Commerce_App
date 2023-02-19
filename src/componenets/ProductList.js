import React from "react";



function ProductList({addProductsToPage}) {



    return (
        <div>
            <h1> Consignment Inventory </h1>
                <ul>{addProductsToPage} </ul>
        </div>

    )
}

export default ProductList