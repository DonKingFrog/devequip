import React, { Fragment, useEffect } from 'react';
import MetaTags from "../Component/json/metatags.js";

function RenderHomePage() {
    import("./Home.css");
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

    useEffect(() => { MetaTags.home() }, [])

    return (
        <Fragment>
            <div className="page-home">
                <section id="hero">
                    <div className="main verticle-wrapper">
                        <div className="trust">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_289_220)"><path d="M11.5011 1.23608C11.3171 0.85414 10.9282 0.611084 10.5011 0.611084C10.074 0.611084 9.68859 0.85414 9.50109 1.23608L7.26845 5.82983L2.28234 6.56595C1.86568 6.62845 1.51845 6.92011 1.38998 7.31942C1.26151 7.71872 1.36568 8.1597 1.66429 8.45483L5.28234 12.0347L4.42817 17.0937C4.35873 17.5104 4.53234 17.934 4.87609 18.1805C5.21984 18.4271 5.6747 18.4583 6.0497 18.2604L10.5046 15.8819L14.9594 18.2604C15.3344 18.4583 15.7893 18.4305 16.133 18.1805C16.4768 17.9305 16.6504 17.5104 16.581 17.0937L15.7233 12.0347L19.3414 8.45483C19.64 8.1597 19.7476 7.71872 19.6157 7.31942C19.4837 6.92011 19.14 6.62845 18.7233 6.56595L13.7337 5.82983L11.5011 1.23608Z" fill="url(#paint0_linear_289_220)"/></g><defs><linearGradient id="paint0_linear_289_220" x1="10.5036" y1="0.611084" x2="10.5036" y2="18.3909" gradientUnits="userSpaceOnUse"><stop stopColor="#30A4FD"/><stop offset="1" stopColor="#0078D4"/></linearGradient><clipPath id="clip0_289_220"><rect width="20" height="17.7778" fill="white" transform="translate(0.5 0.611084)"/></clipPath></defs></svg>
                            Trusted by Users Worldwide
                        </div>

                        <h1>Welcome <span>Developer</span></h1>
                        <p>Equip yourself with game-ready assets made by professional developers.</p>
                        
                        <div className="actions">
                            <a href="/marketplace" id="button">Marketplace</a>
                            <a href="/about" id="redirect">Learn More</a>
                        </div>
                    </div>

                    <div className="highlights horizontal-wrapper">
                        <div>
                            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_289_617)"><path d="M25.5 0C27.2285 0 28.625 1.39648 28.625 3.125V4.14063C37.7754 5.49805 45.002 12.7344 46.3594 21.875H47.375C49.1035 21.875 50.5 23.2715 50.5 25C50.5 26.7285 49.1035 28.125 47.375 28.125H46.3594C45.002 37.2754 37.7656 44.502 28.625 45.8594V46.875C28.625 48.6035 27.2285 50 25.5 50C23.7715 50 22.375 48.6035 22.375 46.875V45.8594C13.2246 44.502 5.99805 37.2754 4.64063 28.125H3.625C1.89648 28.125 0.5 26.7285 0.5 25C0.5 23.2715 1.89648 21.875 3.625 21.875H4.64063C5.99805 12.7246 13.2246 5.49805 22.375 4.14063V3.125C22.375 1.39648 23.7715 0 25.5 0ZM10.9883 28.125C12.209 33.8184 16.6914 38.291 22.375 39.5117V37.5C22.375 35.7715 23.7715 34.375 25.5 34.375C27.2285 34.375 28.625 35.7715 28.625 37.5V39.5117C34.3184 38.291 38.791 33.8086 40.0117 28.125H38C36.2715 28.125 34.875 26.7285 34.875 25C34.875 23.2715 36.2715 21.875 38 21.875H40.0117C38.791 16.1816 34.3184 11.709 28.625 10.4883V12.5C28.625 14.2285 27.2285 15.625 25.5 15.625C23.7715 15.625 22.375 14.2285 22.375 12.5V10.4883C16.6816 11.709 12.209 16.1816 10.9883 21.875H13C14.7285 21.875 16.125 23.2715 16.125 25C16.125 26.7285 14.7285 28.125 13 28.125H10.9883ZM25.5 21.875C26.3288 21.875 27.1237 22.2042 27.7097 22.7903C28.2958 23.3763 28.625 24.1712 28.625 25C28.625 25.8288 28.2958 26.6237 27.7097 27.2097C27.1237 27.7958 26.3288 28.125 25.5 28.125C24.6712 28.125 23.8763 27.7958 23.2903 27.2097C22.7042 26.6237 22.375 25.8288 22.375 25C22.375 24.1712 22.7042 23.3763 23.2903 22.7903C23.8763 22.2042 24.6712 21.875 25.5 21.875Z" fill="url(#paint0_linear_289_617)"/></g><defs><linearGradient id="paint0_linear_289_617" x1="25.5" y1="0" x2="25.5" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#30A4FD"/><stop offset="1" stopColor="#0078D4"/></linearGradient><clipPath id="clip0_289_617"><rect width="50" height="50" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                            <h1>Editor's Pick</h1>
                            <p>Donation Board is recommended by both experts and critics.</p>
                        </div>

                        <div>
                            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_289_620)"><path d="M28.625 3.125C28.625 1.39648 27.2285 0 25.5 0C23.7715 0 22.375 1.39648 22.375 3.125V26.8262L15.207 19.6582C13.9863 18.4375 12.0039 18.4375 10.7832 19.6582C9.5625 20.8789 9.5625 22.8613 10.7832 24.082L23.2832 36.582C24.5039 37.8027 26.4863 37.8027 27.707 36.582L40.207 24.082C41.4277 22.8613 41.4277 20.8789 40.207 19.6582C38.9863 18.4375 37.0039 18.4375 35.7832 19.6582L28.625 26.8262V3.125ZM6.75 34.375C3.30273 34.375 0.5 37.1777 0.5 40.625V43.75C0.5 47.1973 3.30273 50 6.75 50H44.25C47.6973 50 50.5 47.1973 50.5 43.75V40.625C50.5 37.1777 47.6973 34.375 44.25 34.375H34.3379L29.9141 38.7988C27.4727 41.2402 23.5176 41.2402 21.0762 38.7988L16.6621 34.375H6.75ZM42.6875 39.8438C43.3091 39.8438 43.9052 40.0907 44.3448 40.5302C44.7843 40.9698 45.0312 41.5659 45.0312 42.1875C45.0312 42.8091 44.7843 43.4052 44.3448 43.8448C43.9052 44.2843 43.3091 44.5312 42.6875 44.5312C42.0659 44.5312 41.4698 44.2843 41.0302 43.8448C40.5907 43.4052 40.3438 42.8091 40.3438 42.1875C40.3438 41.5659 40.5907 40.9698 41.0302 40.5302C41.4698 40.0907 42.0659 39.8438 42.6875 39.8438Z" fill="url(#paint0_linear_289_620)"/></g><defs><linearGradient id="paint0_linear_289_620" x1="25.5" y1="0" x2="25.5" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#30A4FD"/><stop offset="1" stopColor="#0078D4"/></linearGradient><clipPath id="clip0_289_620"><rect width="50" height="50" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                            <h1>100,000+ Downloads</h1>
                            <p>Dev Equip's products has accumulated over 100,000 downloads.</p>
                        </div>

                        <div>
                            <svg width="57" height="50" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_289_626)"><path d="M37.8328 15.5556C36.112 15.5556 34.7217 14.1653 34.7217 12.4445C34.7217 10.7237 36.112 9.33337 37.8328 9.33337H53.3884C55.1092 9.33337 56.4995 10.7237 56.4995 12.4445V28C56.4995 29.7209 55.1092 31.1112 53.3884 31.1112C51.6675 31.1112 50.2773 29.7209 50.2773 28V19.9598L33.8078 36.4195C32.5925 37.6348 30.6189 37.6348 29.4036 36.4195L19.1661 26.182L5.80781 39.5306C4.59253 40.7459 2.61892 40.7459 1.40365 39.5306C0.188368 38.3153 0.188368 36.3417 1.40365 35.1264L16.9592 19.5709C18.1745 18.3556 20.1481 18.3556 21.3634 19.5709L31.6106 29.8181L45.8731 15.5556H37.8328Z" fill="url(#paint0_linear_289_626)"/></g><defs><linearGradient id="paint0_linear_289_626" x1="28.4958" y1="9.33337" x2="28.4958" y2="40.4421" gradientUnits="userSpaceOnUse"><stop stopColor="#30A4FD"/><stop offset="1" stopColor="#0078D4"/></linearGradient><clipPath id="clip0_289_626"><rect width="56" height="49.7778" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                            <h1>Trending</h1>
                            <p>Donation Board is currently a trending product listed on Roblox's creator store.</p>
                        </div>
                    </div>

                    <img src="/imgs/heroBanner.jpg" alt="" id="backdrop" />
                </section>

                <section id="previews">
                    <img src="/imgs/app-development-1.gif" alt="" />
                    
                    <div className="wrapper">
                        <h1 className="hidden">Develop your games like<br /> a professional developer</h1>
                        <div className="hidden">
                            <div className="top">
                                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_318_998)"><path d="M0 2.1945C0 1.40943 0.631597 0.777832 1.41667 0.777832H4.10243C5.40104 0.777832 6.55208 1.53339 7.08924 2.66672H31.3497C32.9021 2.66672 34.0354 4.14242 33.6281 5.64172L31.208 14.6317C30.7062 16.4851 29.024 17.7778 27.1056 17.7778H10.076L10.3948 19.4601C10.5247 20.1271 11.109 20.6112 11.7878 20.6112H28.8056C29.5906 20.6112 30.2222 21.2428 30.2222 22.0278C30.2222 22.8129 29.5906 23.4445 28.8056 23.4445H11.7878C9.74549 23.4445 7.99236 21.9924 7.61458 19.9914L4.56875 3.99485C4.52743 3.77054 4.33264 3.61117 4.10243 3.61117H1.41667C0.631597 3.61117 0 2.97957 0 2.1945ZM7.55556 28.1667C7.55556 27.7946 7.62884 27.4262 7.77123 27.0825C7.91362 26.7387 8.12232 26.4263 8.38542 26.1633C8.64852 25.9002 8.96086 25.6914 9.30462 25.5491C9.64837 25.4067 10.0168 25.3334 10.3889 25.3334C10.761 25.3334 11.1294 25.4067 11.4732 25.5491C11.8169 25.6914 12.1293 25.9002 12.3924 26.1633C12.6555 26.4263 12.8642 26.7387 13.0065 27.0825C13.1489 27.4262 13.2222 27.7946 13.2222 28.1667C13.2222 28.5388 13.1489 28.9072 13.0065 29.251C12.8642 29.5947 12.6555 29.9071 12.3924 30.1702C12.1293 30.4333 11.8169 30.642 11.4732 30.7844C11.1294 30.9268 10.761 31.0001 10.3889 31.0001C10.0168 31.0001 9.64837 30.9268 9.30462 30.7844C8.96086 30.642 8.64852 30.4333 8.38542 30.1702C8.12232 29.9071 7.91362 29.5947 7.77123 29.251C7.62884 28.9072 7.55556 28.5388 7.55556 28.1667ZM27.3889 25.3334C28.1403 25.3334 28.861 25.6319 29.3924 26.1633C29.9237 26.6946 30.2222 27.4153 30.2222 28.1667C30.2222 28.9182 29.9237 29.6388 29.3924 30.1702C28.861 30.7015 28.1403 31.0001 27.3889 31.0001C26.6374 31.0001 25.9168 30.7015 25.3854 30.1702C24.8541 29.6388 24.5556 28.9182 24.5556 28.1667C24.5556 27.4153 24.8541 26.6946 25.3854 26.1633C25.9168 25.6319 26.6374 25.3334 27.3889 25.3334Z" fill="black"/></g><defs><clipPath id="clip0_318_998"><rect width="34" height="30.2222" fill="white" transform="translate(0 0.777832)"/></clipPath></defs></svg>
                                <h1>Game-Ready Assets</h1>                                
                            </div>
                            <p>Download our flexable high-quality assets made by an experienced developer for all genre.</p>
                        </div>

                        <div className="hidden">
                            <div className="top">
                                <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_318_1004)"><path d="M13 15.1428C14.9702 15.1428 16.8597 14.3601 18.2528 12.967C19.6459 11.5739 20.4286 9.6844 20.4286 7.71422C20.4286 5.74404 19.6459 3.85455 18.2528 2.46142C16.8597 1.0683 14.9702 0.285645 13 0.285645C11.0298 0.285645 9.14033 1.0683 7.74721 2.46142C6.35408 3.85455 5.57143 5.74404 5.57143 7.71422C5.57143 9.6844 6.35408 11.5739 7.74721 12.967C9.14033 14.3601 11.0298 15.1428 13 15.1428ZM10.3478 17.9285C4.63125 17.9285 0 22.5598 0 28.2763C0 29.2281 0.771875 29.9999 1.72366 29.9999H24.2763C25.2281 29.9999 26 29.2281 26 28.2763C26 22.5598 21.3688 17.9285 15.6522 17.9285H10.3478Z" fill="black"/></g><defs><clipPath id="clip0_318_1004"><rect width="26" height="29.7143" fill="white" transform="translate(0 0.285645)"/></clipPath></defs></svg>
                                <h1>Community Resources</h1>                                
                            </div>
                            <p>Download resources from Dev Equip's community full of professional developers.</p>
                        </div>

                        <div className="hidden">
                            <div className="top">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_318_1010)"><path d="M24.375 12.1875C24.375 14.877 23.502 17.3613 22.0312 19.377L29.4492 26.8008C30.1816 27.5332 30.1816 28.7227 29.4492 29.4551C28.7168 30.1875 27.5273 30.1875 26.7949 29.4551L19.377 22.0312C17.3613 23.5078 14.877 24.375 12.1875 24.375C5.45508 24.375 0 18.9199 0 12.1875C0 5.45508 5.45508 0 12.1875 0C18.9199 0 24.375 5.45508 24.375 12.1875ZM12.1875 20.625C13.2955 20.625 14.3927 20.4068 15.4164 19.9827C16.4401 19.5587 17.3702 18.9372 18.1537 18.1537C18.9372 17.3702 19.5587 16.4401 19.9827 15.4164C20.4068 14.3927 20.625 13.2955 20.625 12.1875C20.625 11.0795 20.4068 9.98229 19.9827 8.95861C19.5587 7.93492 18.9372 7.00478 18.1537 6.22129C17.3702 5.43779 16.4401 4.81629 15.4164 4.39227C14.3927 3.96824 13.2955 3.75 12.1875 3.75C11.0795 3.75 9.98229 3.96824 8.95861 4.39227C7.93492 4.81629 7.00478 5.43779 6.22129 6.22129C5.43779 7.00478 4.81629 7.93492 4.39227 8.95861C3.96824 9.98229 3.75 11.0795 3.75 12.1875C3.75 13.2955 3.96824 14.3927 4.39227 15.4164C4.81629 16.4401 5.43779 17.3702 6.22129 18.1537C7.00478 18.9372 7.93492 19.5587 8.95861 19.9827C9.98229 20.4068 11.0795 20.625 12.1875 20.625Z" fill="black"/></g><defs><clipPath id="clip0_318_1010"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>
                                <h1>Build your team</h1>                                
                            </div>
                            <p>Build your team through advertisements to develop exceptional games together.</p>
                        </div>
                    </div>
                </section>

                

                <section id="help">
                    <div className="support">
                        <h1>Need Help?</h1>
                        <div id="wrapper">
                            <a href="/contact" id="redirect">Contact Support</a>
                            <a href="/faq" id="redirect">Frequently Asked Questions</a>
                        </div>
                    </div>

                    <div className="faq">
                        <button className="faqItem active" onClick={(event) => toggleFAQActive(event)}>
                            <h1>Can I request a feature or suggest improvements?</h1>
                            <p>Yes! We value your feedback and suggestions. Visist our <a href="/discord">Join</a> to submit your ideas. Our team reviews all submissions and considers them for the future.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>How can I join the Dev Equip team?</h1>
                            <p>Careers can be found in the "Careers" section of our website. If we require new staff, we'll be posting opportunities there.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>My product isn't working, can I get assistance with the installation?</h1>
                            <p>You may join our <a href="/discord">Join</a> and ask a staff member or a fellow developer to assist you!</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>How do I report a bug or issue?</h1>
                            <p>To report a bug or issue, please visit our <a href="/discord">Join</a>. Find the Bug Report channel and write a detailed response about the issue you're having. Our team will investigate and address the problem as soon as possible.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>

                        <button className="faqItem" onClick={(event) => toggleFAQActive(event)}>
                            <h1>Can I sell/redistribute any Dev Equip product?</h1>
                            <p>Unfortunately you're unable to sell any of our products but can distribute for free as long as you obide by the license agreement provided in the store page for each product.</p>

                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </button>
                    </div>
                </section>

                <section id="community">
                    <h1>Ready to simplify your<br />developing career?</h1>
                    <p>Join thousands of satisfied users and experience the difference.</p>
                    <a className="hidden" id="button" href="/discord">Join Community Discord</a>
                    <img src="imgs/codingbackdrop.jpg" alt="" id="backdrop" />
                </section>
            </div>
        </Fragment>
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

export default RenderHomePage;