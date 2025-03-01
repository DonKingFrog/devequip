import React, { Fragment, useState, useEffect } from 'react';
import productList from "../Component/json/products.js";


function RenderMarketplacePage() {
    import("./Marketplace.css");
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [type, setType] = useState("All Categories");
    const [engine, setEngine] = useState("All Engines");
    const [price, setPrice] = useState("All Prices");
    const [rating, setRating] = useState([1, 2, 3, 4, 5]);

    useEffect(() => {
        async function loadJson() {
            try {
                setProducts(productList);
                setFilteredProducts(productList);
            } catch (error) {
                console.error('Failed to load JSON:', error);
            }
        }; loadJson();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product => {
            return (type === 'All Categories' || product.category === type) && 
                (engine === 'All Engines' || product.engine === engine) && 
                (rating.includes(Math.floor(product.rating)))
            });
        setFilteredProducts(filtered);
    }, [type, engine, rating, price, products]);

    useEffect(() => {
        const filterCards = document.querySelectorAll("#filters .card");
        const filterBlock = document.querySelector("#filters")
        const filterButton = document.querySelector("#filtersButton")
        const filterReset = document.querySelector("#filters #reset")
        const filterClose = document.querySelector("#filters #close")

        const handleTopClick = (element) => {
            return () => {
                element.classList.toggle("collapsed");
            };
        };
    
        const handleButtonClick = (element, btn) => {
            return () => {
                btn.classList.add("active");

                const topElement = element.querySelector(".top");
                switch (topElement.textContent) {
                    case "Type":
                        setType(btn.textContent);
                        element.querySelectorAll(".container button").forEach((elm) => {
                            if (elm !== btn) {
                                elm.classList.remove("active");
                            }
                        });
                        break;
                    case "Engine":
                        setEngine(btn.textContent);
                        element.querySelectorAll(".container button").forEach((elm) => {
                            if (elm !== btn) {
                                elm.classList.remove("active");
                            }
                        });
                        break;
                }
            };
        };
    
        const handleFiltersButton = () => {
            return () => {
                if (filterBlock.classList.contains("active")) {
                    filterBlock.classList.remove("active")
                } else {
                    filterBlock.classList.add("active")
                }
            }
        }

        const handleFiltersClose = () => {
            return () => {
                filterBlock.classList.remove("active")
            }
        }
        
        const handleFiltersReset = () => {
            return () => {
                setType("All Categories");
                setEngine("All Engines");
                setPrice("All Prices");
                setRating([1, 2, 3, 4, 5]);

                filterCards.forEach((element) => { 
                    const topElement = element.querySelector(".top");
                    const container = element.querySelectorAll(".container button");

                    container.forEach((btn) => {
                        switch (topElement.textContent) {
                            case "Type":
                                if (btn.textContent === type) {
                                    btn.classList.add("active")
                                } else {
                                    btn.classList.remove("active")
                                }
                                break;
                            case "Engine":
                                if (btn.textContent === engine) {
                                    btn.classList.add("active")
                                } else {
                                    btn.classList.remove("active")
                                }
                                break;
                        }
                    });
                });

                document.querySelector("#filters #rating #rating1").checked = true
                document.querySelector("#filters #rating #rating2").checked = true
                document.querySelector("#filters #rating #rating3").checked = true
                document.querySelector("#filters #rating #rating4").checked = true
                document.querySelector("#filters #rating #rating5").checked = true
            }
        }

        const handleFiltersRating = () => {
            return () => {
                setRating([
                    document.querySelector("#filters #rating #rating1").checked ? 1 : null,
                    document.querySelector("#filters #rating #rating2").checked ? 2 : null,
                    document.querySelector("#filters #rating #rating3").checked ? 3 : null,
                    document.querySelector("#filters #rating #rating4").checked ? 4 : null,
                    document.querySelector("#filters #rating #rating5").checked ? 5 : null,
                ])
            }
        }

        filterCards.forEach((element) => {
            const topElement = element.querySelector(".top");
            const containerButtons = element.querySelectorAll(".container button");
    
            if (topElement) {
                topElement.addEventListener("click", handleTopClick(element));
            }
    
            containerButtons.forEach((btn) => {
                btn.addEventListener("click", handleButtonClick(element, btn));
            });
        });
    
        filterButton.addEventListener("click", handleFiltersButton());
        filterReset.addEventListener("click", handleFiltersReset());
        filterClose.addEventListener("click", handleFiltersClose());

        document.querySelector("#filters #rating #rating1").addEventListener("click", handleFiltersRating())
        document.querySelector("#filters #rating #rating2").addEventListener("click", handleFiltersRating())
        document.querySelector("#filters #rating #rating3").addEventListener("click", handleFiltersRating())
        document.querySelector("#filters #rating #rating4").addEventListener("click", handleFiltersRating())
        document.querySelector("#filters #rating #rating5").addEventListener("click", handleFiltersRating())

        return () => {
            filterCards.forEach((element) => {
                const topElement = element.querySelector(".top");
                const containerButtons = element.querySelectorAll(".container button");
    
                if (topElement) {
                    topElement.removeEventListener("click", handleTopClick(element));
                }
    
                containerButtons.forEach((btn) => {
                    btn.removeEventListener("click", handleButtonClick(element, btn));
                });
            });

            filterButton.removeEventListener("click", handleFiltersButton());
            filterReset.removeEventListener("click", handleFiltersReset());
            filterClose.removeEventListener("click", handleFiltersClose());

            document.querySelector("#filters #rating #rating1").removeEventListener("changed", handleFiltersRating())
            document.querySelector("#filters #rating #rating2").removeEventListener("changed", handleFiltersRating())
            document.querySelector("#filters #rating #rating3").removeEventListener("changed", handleFiltersRating())
            document.querySelector("#filters #rating #rating4").removeEventListener("changed", handleFiltersRating())
            document.querySelector("#filters #rating #rating5").removeEventListener("changed", handleFiltersRating())
        };
    }, []);
    

    return (
        <div className="page-marketplace">
           <button id="filtersButton">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
                    Filters
                </button>
                
                <div id="filters">
                    <section>
                        <div id="title">
                            Filters
                            <div>
                                <button id="reset">Reset</button>
                                <button id="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
                            </div>
                        </div>

                        <div className="card" id="type">
                            <button className="top">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                Type
                            </button>

                            <div className="container">
                                <button className="active">All Categories</button>
                                <button>Admin Panel</button>
                                <button>Donation Board</button>
                                <button>Script</button>
                                <button>User Interface</button>
                                <button>3D Model</button>
                                <button>Map</button>
                                <button>Plugin</button>
                            </div>
                        </div>

                        <div className="card" id="engine">
                            <button className="top">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                <p>Engine</p>
                            </button>

                            <div className="container">
                                <button className="active">All Engines</button>
                                <button>Roblox</button>
                                <button>Unity</button>
                                <button>Unreal Engine</button>
                                <button>Blender</button>
                                <button>HTML</button>
                            </div>
                        </div>

                        <div className="card" id="rating">
                            <button className="top">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                <p>Rating</p>
                            </button>

                            <div className="container">
                                <div>
                                    <input id="rating5" type='checkbox' defaultChecked />
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                </div>

                                <div>
                                    <input id="rating4" type='checkbox' defaultChecked />
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                </div>

                                <div>
                                    <input id="rating3" type='checkbox' defaultChecked />
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                </div>

                                <div>
                                    <input id="rating2" type='checkbox' defaultChecked />
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                </div>

                                <div>
                                <input id="rating1" type='checkbox' defaultChecked />
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                                </div> 
                            </div>
                        </div>
                    </section>
                </div>
                <div id="catalogue">
                    <Fragment>
                        {filteredProducts.map((product, index) => (
                            <CreateProduct key={index} product={product} />
                        ))}
                    </Fragment>
                </div>
        </div>
    );
}

function CreateProduct(json) {
    json = json.product

    return (
        <a href={json.redirect} id="product">
            <img src={json.thumbnails[0]} alt="" />
            <div className="content">
                {json.name}
                <div className="rating">
                    { !json.rating ? "Not Enough Ratings" : <Fragment>
                        <svg  className="full" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                        <svg className={json.rating >= 2 ? "full" : (json.rating < 2 && json.rating > 1) ?  "half" : "none"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                        <svg className={json.rating >= 3 ? "full" : (json.rating < 3 && json.rating > 2) ?  "half" : "none"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                        <svg className={json.rating >= 4 ? "full" : (json.rating < 4 && json.rating > 3) ?  "half" : "none"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                        <svg className={json.rating >= 5 ? "full" : (json.rating < 5 && json.rating > 4) ?  "half" : "none"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.12216 15.4616L6.07464 11.3439L6.14248 11.0507L5.91503 10.8535L2.72002 8.08348L6.94324 7.71688L7.2433 7.69083L7.36056 7.4134L9 3.53436L10.6394 7.4134L10.7567 7.69083L11.0568 7.71688L15.28 8.08348L12.085 10.8535L11.8575 11.0507L11.9254 11.3439L12.8778 15.4616L9.25827 13.2781L9 13.1223L8.74173 13.2781L5.12216 15.4616Z" fill="#FBB600" stroke="#FBB600"/></svg>
                        {`(${json.rating})`}
                    </Fragment>
                    }
                </div>
            </div>
            {json.price}
        </a>
    );
}

export default RenderMarketplacePage;