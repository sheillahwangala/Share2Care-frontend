import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./searchbar.css"

function FarmProducts() {

    const [products, setProducts] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/v1/products")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setProducts(data);
                } else {
                    setProducts(
                        data.filter((product) =>
                            product.name.toLowerCase().includes(filterQuery.toLocaleLowerCase()))
                    )
                }
            })
    }, [filterQuery])

    return (
        <div className="donations-container" >
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

            <h3>Farm Products</h3>
            <div className="container">
                {products.map((product) => {
                    return (
                            <div className="each-card" key={product.id} >
                                <img src={product.image_url} class="card-img-top rounded" alt="prod" />
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Produce: </td>
                                            <td> {product.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Price: </td>
                                            <td>{product.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Quantity:</td>
                                            <td>{product.quantity} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    )
                })}
            </div>

        </div>
    )
}
export default FarmProducts;