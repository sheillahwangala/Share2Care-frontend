import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../navbar/footer/Footer";
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

                            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Complete Transaction </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Pay Amount: <strong>{product.price} KES</strong> for your {product.name}.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-secondary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Purchase</button>
                                            <button class="btn btn-success" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Donate</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Thank you for Purchasing from Us.</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Your purchase is ready. Visit our farm at your own convenience to pick.
                                        </div>
                                        <div class="modal-footer">
                                            {/* <button class="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back.</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">You are our Hero!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Your Donation is highly appreciated.
                                        </div>
                                        <div class="modal-footer">
                                            {/* <button class="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back.</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="btn btn-dark" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Select to Buy</a>


                        </div>
                    )
                })}
            </div>
            <Footer />

        </div>
    )
}
export default FarmProducts;