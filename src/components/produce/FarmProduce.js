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

        </div>
    )
}
export default FarmProduce;