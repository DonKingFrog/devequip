import React, { Fragment, useEffect } from 'react';
import MetaTags from "../Component/json/metatags.js";

function RenderServicesPage() {
    import("./Services.css");
    useEffect(() => {
        document.querySelector("#preloader").classList.add("loaded");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            })
        })
        
        const hiddenElements = document.querySelectorAll(".hidden, .hiddenBlur");
        hiddenElements.forEach((el, index) => {
            observer.observe(el)
        });
    })
    
    useEffect(() => { MetaTags.services() }, [])
    
    return (
        <Fragment>
            <div className="page-services">
                <section id="hero">
                    <div className="main verticle-wrapper">
                        <h1>Explore our <span>Services</span></h1>
                        <p>Boost your productivity by commissioning us to develop assets for you.</p>
                        
                        <div className="actions">
                            <a href="/contact" id="button">Contact Us</a>
                        </div>
                    </div>

                    <div className="highlights horizontal-wrapper">
                        <div>
                            <svg width="51" height="40" viewBox="0 0 51 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_481_645)"><path d="M5.5 7.5C5.5 4.74219 7.74219 2.5 10.5 2.5H40.5C43.2578 2.5 45.5 4.74219 45.5 7.5V27.5H40.5V7.5H10.5V27.5H5.5V7.5ZM0.5 31.5C0.5 30.6719 1.17188 30 2 30H49C49.8281 30 50.5 30.6719 50.5 31.5C50.5 34.8125 47.8125 37.5 44.5 37.5H6.5C3.1875 37.5 0.5 34.8125 0.5 31.5ZM22.4531 16.3281L20.0312 18.75L22.4531 21.1719C23.1875 21.9062 23.1875 23.0937 22.4531 23.8203C21.7188 24.5469 20.5313 24.5547 19.8047 23.8203L16.0547 20.0703C15.3203 19.3359 15.3203 18.1484 16.0547 17.4219L19.8047 13.6719C20.5391 12.9375 21.7266 12.9375 22.4531 13.6719C23.1797 14.4062 23.1875 15.5937 22.4531 16.3203V16.3281ZM31.2031 13.6719L34.9531 17.4219C35.6875 18.1562 35.6875 19.3437 34.9531 20.0703L31.2031 23.8203C30.4688 24.5547 29.2813 24.5547 28.5547 23.8203C27.8281 23.0859 27.8203 21.8984 28.5547 21.1719L30.9766 18.75L28.5547 16.3281C27.8203 15.5938 27.8203 14.4063 28.5547 13.6797C29.2891 12.9531 30.4766 12.9453 31.2031 13.6797V13.6719Z" fill="url(#paint0_linear_481_645)"/></g><defs><linearGradient id="paint0_linear_481_645" x1="25.5" y1="2.5" x2="25.5" y2="37.5" gradientUnits="userSpaceOnUse"><stop stopColor="#30A4FD"/><stop offset="1" stopColor="#0078D4"/></linearGradient><clipPath id="clip0_481_645"><rect width="50" height="40" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                            <h1>Programming</h1>
                            <p>Transforming ideas into functional and efficient code.</p>
                            <br />
                            <p>Lua / HTML / CSS / JS / C#</p>
                            <p>Node.js / React</p>
                            <p>Bug Fixing</p>
                        </div>

                        <div>
                            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_481_642)"><path d="M0.529297 8.74023C0.509766 8.94531 0.5 9.16016 0.5 9.375V21.875V40.625C0.5 44.0723 3.30273 46.875 6.75 46.875H44.25C47.6973 46.875 50.5 44.0723 50.5 40.625V21.875V9.375C50.5 5.92773 47.6973 3.125 44.25 3.125H6.75C6.53516 3.125 6.32031 3.13477 6.11523 3.1543C5.2168 3.24219 4.37695 3.52539 3.625 3.95508C2.62891 4.54102 1.80859 5.38086 1.25195 6.39648C0.871094 7.10938 0.617187 7.90039 0.529297 8.74023ZM5.1875 21.875H45.8125V40.625C45.8125 41.4844 45.1094 42.1875 44.25 42.1875H6.75C5.89062 42.1875 5.1875 41.4844 5.1875 40.625V21.875Z" fill="url(#paint0_linear_481_642)"/></g><defs><linearGradient id="paint0_linear_481_642" x1="25.5" y1="3.125" x2="25.5" y2="46.875" gradientUnits="userSpaceOnUse"><stop stopColor="#30A4FD"/><stop offset="1" stopColor="#0078D4"/></linearGradient><clipPath id="clip0_481_642"><rect width="50" height="50" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                            <h1>UI/UX Design</h1>
                            <p>Crafting intuitive and visually appealing user experiences.</p>
                            <br />
                            <p>User Interface</p>
                            <p>Website Pages</p>
                            <p>Wireframes</p>
                        </div>

                        <div>
                            <svg width="51" height="44" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_481_639)"><path d="M25.7431 4.17651L32.5486 6.72886L25.5 9.41011L18.4514 6.72886L25.2569 4.17651C25.4132 4.11636 25.5868 4.11636 25.7517 4.17651H25.7431ZM12.3056 7.94917V17.5914C12.1927 17.6257 12.0799 17.6601 11.967 17.7031L3.63368 20.8312C1.75 21.5359 0.5 23.332 0.5 25.3257V35.5695C0.5 37.4773 1.63715 39.2046 3.40799 39.9781L11.7413 43.6046C12.9913 44.146 14.4063 44.146 15.6562 43.6046L25.5 39.3164L35.3524 43.6046C36.6024 44.146 38.0174 44.146 39.2674 43.6046L47.6007 39.9781C49.3628 39.2132 50.5087 37.4773 50.5087 35.5695V25.3343C50.5087 23.332 49.2587 21.5445 47.375 20.8312L39.0417 17.7031C38.9288 17.6601 38.816 17.6257 38.7031 17.5914V7.94917C38.7031 5.94683 37.4531 4.15933 35.5694 3.44604L27.2361 0.31792C26.125 -0.0945801 24.901 -0.0945801 23.7899 0.31792L15.4566 3.44604C13.5556 4.15933 12.3056 5.95542 12.3056 7.94917ZM34.5278 18.0984L27.375 20.7796V13.114L34.5278 10.3984V18.0984ZM13.9375 21.5617L20.7431 24.114L13.6944 26.7867L6.64583 24.114L13.4514 21.5617C13.6076 21.5015 13.7812 21.5015 13.9462 21.5617H13.9375ZM15.5694 39.1273V30.4906L22.7222 27.775V36.0164L15.5694 39.1273ZM37.0625 21.5617C37.2187 21.5015 37.3924 21.5015 37.5573 21.5617L44.3628 24.114L37.3056 26.7867L30.2569 24.114L37.0625 21.5617ZM45.9167 36.1968L39.1806 39.1273V30.4906L46.3333 27.775V35.5695C46.3333 35.8445 46.1684 36.0851 45.9167 36.1968Z" fill="url(#paint0_linear_481_639)"/></g><defs><linearGradient id="paint0_linear_481_639" x1="25.5043" y1="0.00854492" x2="25.5043" y2="44.0107" gradientUnits="userSpaceOnUse"><stop stopColor="#30A4FD"/><stop offset="1" stopColor="#0078D4"/></linearGradient><clipPath id="clip0_481_639"><rect width="50" height="44" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                            <h1>3D Modeling</h1>
                            <p>Building detailed and realistic 3D representations.</p>
                            <br />
                            <p>Solid Modling (Any Poly)</p>
                            <p>Texturing: Stylized / Procedural / PBR</p>
                        </div>
                    </div>

                    <img src="imgs/heroBanner.jpg" alt="" id="backdrop" />
                </section>
            </div>
        </Fragment>
    );
}

export default RenderServicesPage;