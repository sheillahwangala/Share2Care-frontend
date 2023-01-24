import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./searchbar.css"

function FarmProducts() {

    const [products, setProducts] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch("APIHost/products")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setProducts(data);
                } else {
                    setProducts(
                        data.filter((product) =>
                            product.product_name.toLowerCase().includes(filterQuery.toLocaleLowerCase()))
                    )
                }
            })
    }, [filterQuery])

    return (
        <div className="products-container" >
            <br />
            <div class="search" >
                <input
                    type="text"
                    placeholder="Search product"
                    onChange={(e) => {
                        setFilterQuery(e.target.value);
                        console.log(filterQuery);
                    }}
                    className="form-searchbar"
                />
            </div>
            <br></br>

            <h5>Farm Products</h5>
            <div>
                {products.map((product) => {
                    return (
                        <div class="card rounded-3" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> {product.product_name} </h5>
                                <p class="card-text"> {product.quantity} /  {product.unit_measure} </p>
                                <p class="card-text"> {product.product_price} per {product.unit_measure} </p>
                                <p class="card-text"> {product.location}</p>
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    <Link to={`/add-to-cart`} >Place Order</Link>
                                </div>

                                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                                    <Link to={`/add-donation`} >Donate</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default FarmProducts;