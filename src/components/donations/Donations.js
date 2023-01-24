import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../navbar/footer/Footer";
import "./donations.css"

function Donations() {

    const [donations, setDonations] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/v1/donations")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setDonations(data);
                } else {
                    setDonations(
                        data.filter((donation) =>
                            donation.product.toLowerCase().includes(filterQuery.toLocaleLowerCase()))
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

            <h3>Recieved Donations</h3>
            <div className="container">
                {donations.map((donation) => {
                    return (
                        <div className="each-card" key={donation.id} >
                            <img src={donation.image} class="card-img-top rounded" alt="prod" />
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Produce: </td>
                                        <td> {donation.product}</td>
                                    </tr>
                                    <tr>
                                        <td>Date Donated: </td>
                                        <td>{donation.date_donated}</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity Donated:</td>
                                        <td>{donation.quantity} </td>
                                    </tr>
                                    <tr>
                                        <td>Status:</td>
                                        <td>{donation.status} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
export default Donations;