import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../farmer/farmer.css"

function AddDonation() {

    const [product_name, setProduct_name] = useState("");
    const [image, setImage] = useState("");
    const [quantity, setQuantity] = useState();
    const [unit, setUnit] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState();

    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "e2e6z2lx");
        fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setImage(data.secure_url);
            });
    };

    const createProduct = (e) => {
        e.preventDefault();
        fetch("APIHost/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                product_name: product_name,
                image: image,
                quantity: quantity,
                unit: unit,
                price: price,
            }),
        }).then((response) => response.json())
        setTimeout(() => {
            Navigate("/products");
        }, 1000)

    };

    return (
        < div className="add-container" >
            <h4>Donate Farm Produce.</h4>
            <div className="d-flex flex-column justify-content-center w-50">
                <label>Choose Product Image</label>
                <input
                    type="file"
                    id="file-selector"
                    onChange={(e) => {
                        uploadImage(e.target.files);
                    }}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    className="mt-2 form-control"
                    value={product_name}
                    onChange={(e) => setProduct_name(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    className="mt-2 form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Units"
                    value={unit}
                    className="mt-2 form-control"
                    onChange={(e) => setUnit(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    className="mt-2 form-control"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Farm Location"
                    value={location}
                    className="mt-2 form-control"
                    onChange={(e) => setLocation(e.target.value)}
                />

                <button
                    type="submit"
                    onClick={createProduct}
                    className="btn btn-success my-4 w-50"
                >
                    Add Donation.
                </button>
            </div>
        </div >
    )


}
export default AddDonation;