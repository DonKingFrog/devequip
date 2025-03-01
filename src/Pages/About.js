import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function RenderAboutPage() {
    import('./About.css');

    useEffect(() => {
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

    return (
        <div className="page-about">
            <section id="aboutus" className="infoSection">
                <div className="wrapper">
                    <h1>About Us</h1>
                    <p>Dev Equip believes every developer should have a chance at success; Therefore, we’ve come to make that possible. We’re all about helping out with high-quality products that need no user-manual for scientist.<br /><br />All our products are built to become the best of its kind in the marketplace. With fully fledged out user-friendly designs and user experiences with optimized code.</p>
                </div>

                <div id="overlay1" />
                <div id="overlay2" />
                <div id="overlay3" />
                <img src="/imgs/waveBluebackground.jpg" alt="" id="backdrop" />
            </section>
            
            <section id="ourstory" className="infoSection">
                <div className="wrapper">
                    <h1>Our Story</h1>
                    <p>Dev Equip, formerly known as DNTech (Don's Technology), was founded by Donavan in 2022 after resigning from Bangkok Entertainment. With the support of Zack and Posh, president and co-president of Bangkok Entertainment, DNTech began with electronic dance music concert equipment.<br /><br />In 2023, Donavan launched Exploiter Mayhem, a groundbreaking product for all developers, becoming highly popular. DNTech then expanded its product range to include tools, 3D models, and user interfaces. In March 2023, the company rebranded as Dev Equip, marking the beginning of an exciting new chapter.<br /><br />During 2024, Dev Equip released one of its all-time favorite products, Nexus Dynamics and Donation Board. Both souring over all other existing products and quickly becoming the favorite picks on the Roblox Creator Store.<br /><br />Donavan, currently the only developer at Dev Equip and is working at his home. Using all the time he has available to deliver exceptional products.</p>
                </div>
            </section>
            
            <section id="values" className="infoSection">
                <div className="wrapper">
                    <h1>Achievements</h1>
                    <div>
                        <div className="top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                            <h1>Launch of Nexus Dynamics</h1>                                
                        </div>
                        <p>An innovative administrator system for Roblox developers allows for in-game control without needing Roblox Studio. It has been well-received for its management capabilities, studio-like editors, and user-friendly interface.</p>
                    </div>

                    <div>
                        <div className="top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                            <h1>Launch of Donation Board</h1>                                
                        </div>
                        <p>Easiest Donation Board to setup on the market. Reached peak trending in the creator store for 3 days. Most recommended product by experts.</p>
                    </div>

                    <div>
                        <div className="top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                            <h1>Marketplace</h1>                                
                        </div>
                        <p>From uploading and selling products on a Discord server to making our own fully interactable website with a built-in marketplace containing all our products.</p>
                    </div>

                    <div>
                        <div className="top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                            <h1>Thriving Dev Community</h1>                                
                        </div>
                        <p>Having a Discord community server full of notable developers across various genre helping each other out and obtaining feedback for their own impressive works.</p>
                    </div>
                </div>
            </section>

            <section id="mission" className="infoSection">
                <div className="wrapper">
                    <h1>Our Mission: Help developers grow their games with ease.</h1>
                    <p>Dev Equip releases assets made for both novice and experienced developers, providing high-quality resources for their games. Our platform eliminates the need for complex user manuals by incorporating intuitive, built-in interactive settings.</p>
                </div>
            </section>

            <section id="values" className="infoSection">
                <div className="wrapper">
                    <h1>Core Values</h1>
                    <div>
                        <div className="top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192c0 0 0 0 0 0s0 0 0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496l0-55.4c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1l0 55.4c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                            <h1>Simplicity</h1>                                
                        </div>
                        <p>Our products are carefully crafted so the installation process is made as swiftly as possible.</p>
                    </div>

                    <div>
                        <div className="top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
                            <h1>Innovation</h1>                                
                        </div>
                        <p>Unique products is what we're known for. All our products go through a unique design process making our products different from the rest.</p>
                    </div>

                    <div>
                        <div className="top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                            <h1>User-Friendliness</h1>                                
                        </div>
                        <p>Our products are built under the influence that monkeys might be using our products, therefore we must make it easy to use!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RenderAboutPage;