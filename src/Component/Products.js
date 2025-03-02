import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import productList from "./json/products.js";
import { Helmet } from 'react-helmet';
import MetaTags from "../Component/json/metatags.js";



function RenderProductPage() {
    import ("./Products.css");
    const { productId } = useParams();
    const [jsonContent, setJsonContent] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentTab, setCurrentTab] = useState("Overview");

    useEffect(() => {
        const loadPost = async () => {
            try {                
                for (let i = 0; i < productList.length; i++) {
                    const data = productList[i]
                    
                    if (data.name.replaceAll(" ", "").toLowerCase() === productId) {
                        setJsonContent(() => data);
                        setIsLoading(false);
                        break;
                    }
                }
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        loadPost();
    }, [productId]);

    useEffect(() => { MetaTags.product(jsonContent) }, [jsonContent])

    if (isLoading) {
        return <div></div>;
    }

    if (error) {
        console.error(error)
        return (<div className="failed">
            <h1>404</h1>
            <h2>Not Found</h2>
        </div>);
    }

    return (
        <>
            
            <button className="page-product-preview" onClick={(event) => (document.querySelector(".page-product-preview").classList.remove("active"))}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <img src={null} alt="" id="preview" />
            </button>

            <div className="page-product frame">
                <section id="main">
        
                    <div className="content">
                        <h1 id="title">{jsonContent.name}</h1>
                        <div id="info">
                            <p id="publisher">{jsonContent.publisher}</p>
                            <p id="date">{`Created on ${jsonContent.created}`}</p>
                        </div>
                        <div id="buttons">
                            {jsonContent.downloads.map((dict, index) => (
                                dict.type === "Link" ? 
                                <a key={index} id="download" href={dict.href}>Download</a> : 
                                <a key={index} id="link" href={dict.href}>{dict.name}</a>
                            ))}
                            
                            {(!jsonContent.source || jsonContent.source.length == 0) ? undefined :
                                <a id="source" href={jsonContent.source}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>View Source</a>
                            }
                        </div>
                        <p id="require">{(!jsonContent.requirements || jsonContent.requirements.length == 0) ? "" : `ⓘ Requires ${jsonContent.requirements.join(' · ')}`}</p>
                    </div>

                    <img src={jsonContent.thumbnails[0]} alt="" id="thumbnail" />

                    <div id="overlay1" />
                    <div id="overlay2" />
                    <div id="overlay3" />
                    <img src={jsonContent.thumbnails[0]} alt="" id="backdrop" />
                </section>
                <div id="viewport">
                    <section id="description">
                        <div id="screenshots">
                            {jsonContent.thumbnails.map((src, index) => (
                                <button key={index} onClick={(event) => { previewScreenshot(event)}}><img key={index} src={src} alt="" id={`screenshot${index+1}`} /></button>
                            ))}
                        </div>

                        {!jsonContent.overview ? undefined : 
                            <div id="overview">
                                <h1>Overview</h1>
                                <ReactMarkdown>{jsonContent.overview}</ReactMarkdown>
                            </div>
                        }
                    </section>

                    <section id="explorer">
                        {!jsonContent.discontinued ? undefined :
                            <div className="discontinued frame">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                                <p>Beaware it may contain dangerous bugs. This product has been discontinued and isn't recommended.</p>
                            </div>
                        }

                        <div className="wrapper">
                            <h1>{jsonContent.name}</h1>
                            <div id="content">
                                {jsonContent.rating}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                <div id="divider" />
                                {formatNumber(jsonContent.downloadcount)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                            </div>
                        </div>

                        {!jsonContent.licenses ? undefined : 
                            <div className="dropdown-wrapper active">
                                <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                                    License Agreement
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                </button>

                                <div id="content">
                                    {jsonContent.licenses.map((dict, index) => (
                                        <p key={index}>{dict.name}: <a href={dict.href}>{dict.type}</a></p>    
                                    ))}
                                </div>
                            </div>
                        }

                        <div className="dropdown-wrapper active">
                            <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                                <p>Downloads</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </button>

                            <div id="content">
                                {jsonContent.downloads.map((dict) => (
                                    dict.type == "Link" ?
                                    <a id="download" href={dict.href}>{dict.name}</a> :
                                    <a id="file" href={dict.href}>{dict.name} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg></a>
                                ))}
                            </div>
                        </div>

                        <div className="dropdown-wrapper active">
                            <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                                <p>Details</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </button>

                            <div id="content">
                                <p>Version:<span>{jsonContent.version}</span></p>
                                <p>Created:<span>{jsonContent.created}</span></p>
                                <p>Updated:<span>{jsonContent.updated}</span></p>
                                <p>Publisher:<span>{jsonContent.publisher}</span></p>
                                <p>Developer:<span>{jsonContent.developer}</span></p>
                            </div>
                        </div>

                        <div className="dropdown-wrapper active">
                            <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                                <p>Support</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </button>

                            <div id="list">
                                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg><a href={jsonContent.website.href}>{jsonContent.website.name}</a></p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>{jsonContent.email}</p>
                            </div>
                        </div>

                        {!jsonContent.contributors ? undefined : 
                            <div className="dropdown-wrapper active">
                                <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                                    <p>Contributors</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                </button>

                                <div id="stringList">
                                    {jsonContent.contributors.map((dict) => (
                                        <p><b>{dict.name}</b>: {dict.deed}</p>
                                    ))}
                                </div>
                            </div>
                        }
                    </section>
                </div>
            </div>
        </>
    );
}

function toggleDropdown(event) {
    if (event.target.parentElement.classList.contains("active")) {
        event.target.parentElement.classList.remove("active");
    } else {
        event.target.parentElement.classList.add("active");
    }
}

function previewScreenshot(event) {
    const src = event.target.querySelector("img").src
    document.querySelector(".page-product-preview img").src = src
    document.querySelector(".page-product-preview").classList.add("active")
}
function formatNumber(num) { if(num >= 1000) { return Math.floor(num / 1000) + 'K'; } return num; }

export default RenderProductPage