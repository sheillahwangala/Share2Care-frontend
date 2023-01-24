import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
import Footer from "../navbar/footer/Footer";

function HomePage() {

    return (
        <div className="homepage-container">
            <div className="top-section">
                <div>
                    <div className="first-div">
                        <h1>Promote sustainability by improving food security and minimizing food wastages. </h1>
                        {/* <h1>Buying, Selling and Donating quality farm produce has never been easier.</h1> */}
                        <p>Share2Care is here to have you sorted. We connect farmers directly to consumers. </p>
                    </div>
                    <div className="btn-explore">
                        <Link> <span class="badge text-bg"> Explore More</span> </Link>
                    </div>
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
                <div className="image-one">
                    <img src="https://media.istockphoto.com/id/1138461595/photo/variety-healthy-fruits-vegetables-berries.jpg?s=612x612&w=0&k=20&c=H080ia0BgbwqevAiybf8tcQzPPopxAi8F4n_hOwNkGs=" alt="img1" />
                    {/* <img src="https://img.freepik.com/premium-photo/vegetables-fruits-white-surface_55883-1412.jpg?size=626&ext=jpg" alt="image" width="100%"/> */}
                </div>
            </div>

            <div className="stats">
                <div class="stats-data">
                    <p>100%</p>
                    <p>Access to farm produce</p>
                </div>
                <div class="ven">
                    <p>0%</p>
                    <p>Food Wastage</p>
                </div>
                <div class="ven">
                    <p>95%</p>
                    <p>Ready market</p>
                </div>
            </div>

            <div className="promote">
                <h4>Promote food security, Eliminate food wastage.</h4>
                <p>Register with Us to either <strong>Sell</strong> your farm produce, <strong>Buy</strong> directly from farmers or support our nobble cause of <strong>Donating</strong> to the less fortunate. </p>
            </div>

            <Footer />

        </div>
    )

}
export default HomePage;