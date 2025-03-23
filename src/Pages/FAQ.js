import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import MetaTags from "../Component/json/metatags.js";

function RenderFAQPage() {
    import ('./FAQ.css');

    useEffect(() => { MetaTags.faq() }, [])

    return (
        <div className="page-faq">
            <section id="help">
                <div className="support">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div className="faq">
                    <button className="faqItem active" onClick={(event) => toggleFAQActive(event)}>
                        <h1>Can I request a feature or suggest improvements?</h1>
                        <p>Yes! We value your feedback and suggestions. Visit our <a href="/discord/"><p>Discord</p></a> to submit your ideas. Our team reviews all submissions and considers them for the future.</p>

                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>

                    <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                        <h1>When is Nexus Dynamics v2.0.5 releasing?</h1>
                        <p>The developer of Nexus Dynamics hasn't confirmed a release date. However, we're sure it should release within Q2 of 2025.</p>

                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>


                    <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                        <h1>How can I join the Dev Equip team?</h1>
                        <p>The Dev Equip Team will announce a opportunity to join our team within the <a href="/discord/">Discord</a> until we have our careers page.</p>
                        {/* <p>Careers can be found in the "Careers" section of our website. If we require new staff, we'll be posting opportunities there.</p> */}

                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>

                    <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                        <h1>How do I report a bug or issue?</h1>
                        <p>To report a bug, please visit our <a href="/discord/">Discord</a> or <a href="/contact/">Contact</a>. In the Discord, write a bug report ticket or use the bug report channel, otherwise use our <a href="/contact/">Contact</a> page with Bug Report as the subject. Our team will investigate and address the problem as soon as possible.</p>

                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>

                    <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                        <h1>Can I sell/redistribute any Dev Equip product?</h1>
                        <p>Unfortunately you're unable to sell any of our products but can distribute for free as long as you obide by the license agreement provided in the store page for each product.</p>

                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>

                    <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                        <h1>When is Donation Board v3.5 releasing?</h1>
                        <p>The developer is has decided to wait on content for Donation Board until Nexus Dynamics v2.0.5 has released. Furthermore, the developer has planned a further improvement to process receipt/products callback during March of 2025.</p>

                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>

                    <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                        <h1>How can I contribute to any Dev Equip products?</h1>
                        <p>Contributions are heavily appreciated and can be done through means of <a href="/discord/">Contact</a>, DevForum, or <a href="/discord/">Discord</a>. You may contribute to any product if the developer accepts your suggestion/solution to a bug.</p>

                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>

                    <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                        <h1>How did the developer of Dev Equip learn scripting?</h1>
                        <p>The lead developer of Dev Equip has learned his skills through trial and error. Using DevForum support tickets, discussions, and reading the documentation.<br /><br />Additionally, we'd recommend learning off YouTube videos by: <a href="https://www.youtube.com/c/AlvinBLOX" target="_blank">AlvinBLOX</a>, <a href="https://www.youtube.com/c/RoBuilder" target="_blank">RoBuilder</a>, <a href="https://www.youtube.com/c/TheDevKing">TheDevKing</a></p>
                        <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                </div>
            </section>
        </div>
    );
}

function toggleFAQActive(event) {
    const faqItem = event.target;

    if (!faqItem.classList.contains("active")) {
        faqItem.classList.add('active');
    } else {
        faqItem.classList.remove('active');
    }
}

export default RenderFAQPage;