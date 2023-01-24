import React, { useEffect, useState } from "react";
import "./searchbar.css"

function FarmProduce() {

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
        <div>
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
                        <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> {product.product_name} </h5>
                                <p class="card-text"> {product.quantity} /  {product.unit_measure} </p>
                                <p class="card-text"> {product.product_price} per {product.unit_measure} </p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <div className="btnholder">
                                    <Link to={`/add-to-cart`} ><span class="btn" id='proposetender'>Place Order</span></Link>
                                </div>
                                <div className="btnholder">
                                    <Link to={`/add-donation`} ><span class="btn" id='proposetender'>Donate</span></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default FarmProduce;