import { Helmet } from 'react-helmet';

function RenderFAQPage() {
    import ('./FAQ.css');

    return (
        <>
            <Helmet>
                <title>FAQ</title>

                <meta itemprop="name" content="FAQ" />
                <meta itemprop="description" content="Our answers to questions asked frequently by our community." />
                <meta itemprop="image" content="https://www.devequip.com/logo.png" />
                
                <meta name="description" content="Our answers to questions asked frequently by our community." />
                <meta name="author" content="Dev Equip" />
                <meta name="keywords" content="dev, devs, developers, equip, equipment, roblox, unity, games, game, administrator, development, marketplace, store" />
                <meta name="theme-color" content="#0078D4" />


                <meta property="og:title" content="FAQ" />
                <meta property="og:description" content="Our answers to questions asked frequently by our community." />
                <meta property="og:image" content="https://www.devequip.com/logo.png" />
                <meta property="og:image:width" content="465" />
                <meta property="og:image:height" content="465" />
                <meta property="og:url" content="https://www.devequip.com/faq" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FAQ" />
                <meta name="twitter:description" content="Our answers to questions asked frequently by our community." />
                <meta name="twitter:image" content="https://www.devequip.com/logo.png" />

                <meta name="copyright" content="Dev Equip" />
                <meta name="distribution" content="global" />
            </Helmet>

            <div className="page-faq">
                <section id="help">
                    <div className="support">
                        <h1>Frequently Asked Questions</h1>
                    </div>

                    <div className="faq">
                        <button className="faqItem active" onClick={(event) => toggleFAQActive(event)}>
                            <h1>Can I request a feature or suggest improvements?</h1>
                            <p>Yes! We value your feedback and suggestions. Visist our <a href="/discord"><p>Join</p></a> to submit your ideas. Our team reviews all submissions and considers them for the future.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>When is Nexus Dynamics v2.0.5 releasing?</h1>
                            <p>The developer of Nexus Dynamics hasn't confirmed a release date. However, we're confirming its releasing in Q2 of 2025.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>


                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>How can I join the Dev Equip team?</h1>
                            <p>Currently, Dev Equip is not hiring new staff, but we'll be sure to let you know when positions appear.</p>
                            {/* <p>Careers can be found in the "Careers" section of our website. If we require new staff, we'll be posting opportunities there.</p> */}

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>How do I report a bug or issue?</h1>
                            <p>To report a bug or issue, please visit our <a href="/discord"><p>Join</p></a>. Find the Bug Report channel and write a detailed response about the issue you're having. Our team will investigate and address the problem as soon as possible.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>Can I sell/redistribute any Dev Equip product?</h1>
                            <p>You're able to redistribute your version of the product only if you meet the following: <b>FREE, Open Sourced, and applied appropriate credit to DonKingFrog or Dev Equip</b>.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>When is Donation Board v3.5 releasing?</h1>
                            <p>The developer is has decided to halt on donation board content until Nexus Dynamics v2.0.5 has released. Furthermore, the developer has planned a further improvement to process receipt/products callback during March of 2025.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>How can I contribute to any Dev Equip products?</h1>
                            <p>You may contribute to any product if the developer accepts your suggestion or solution to a major bug. </p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>How did the developer of Dev Equip learn his scripting?</h1>
                            <p>The lead developer of all Dev Equip products have learned his skills through trial and error. Using DevForum support tickets, discussions, and reading the documentation.<br /><br />Additionally, we'd recommend learning off YouTube videos by: <a href="https://www.youtube.com/c/AlvinBLOX" target="_blank">AlvinBLOX</a>, <a href="https://www.youtube.com/c/RoBuilder" target="_blank">RoBuilder</a>, <a href="https://www.youtube.com/c/TheDevKing">TheDevKing</a></p>
                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>
                    </div>
                </section>
            </div>
        </>
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