import React, { useEffect, useState } from 'react';
import MetaTags from "../Component/json/metatags.js";

function RenderContactPage() {
    import ('./Contact.css');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('Support');
    const [message, setMessage] = useState('');
    const [dropdownState, setDropdownState] = useState(true);

    function toggleName(event) {
        setTimeout(() => {
            setName(event.target.value)
            if (event.target.value.length > 0) {
                document.querySelector(".name").classList.add("active")
            } else {
                document.querySelector(".name").classList.remove("active")
            }
        }, 50)
    }   
    
    function toggleEmail(event) {
        setTimeout(() => {
            setEmail(event.target.value);

            if (event.target.value.length > 0) {
                document.querySelector(".email").classList.add("active")
            } else {
                document.querySelector(".email").classList.remove("active")
            }
        }, 50)
    }

    function toggleDropdown() {
        setDropdownState(!dropdownState)

        if (dropdownState) {
            document.querySelector(".subject").classList.add("active")
        } else {
            document.querySelector(".subject").classList.remove("active")
        }
    }

    const subjectInfo = {
        "Support" : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z"/></svg>,
        "Bug Report" : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>,
        "Business Inquiries" : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 160 0 8.2 0c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7l0-32.7c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM320 352l-96 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l296.2 0C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z"/></svg>,
        "Other" : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32L121 32zm0 64l270 0 48 192-51.2 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L73 288 121 96z"/></svg>
    }

    useEffect(() => { MetaTags.contact() }, [])

    return (
        <div className="page-contact">
                <div className="contact">
                    <div className="wrapper">
                        <h1>Contact Us</h1>
                        <p>We'll get back to you as soon as possible.</p>
                    </div>

                    <div className="container">
                        <button className="inputbox name">
                            <div className="content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                                <p>Full Name</p>
                            </div>

                            <input type="text" onChange={toggleName} />
                        </button>

                        <button className="inputbox email">
                            <div className="content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                <p>Email</p>
                            </div>
                            
                            <input type="email" onChange={toggleEmail} />
                        </button>

                        <button className="dropdownbox subject" onClick={toggleDropdown}>
                            <div className="content">
                                {subjectInfo[subject]}<p>Subject</p>
                                <svg className="caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                            </div>

                            <p className="input">{subject}</p>

                            <div className="dropdown">
                                <button id="Support" onClick={() => setSubject("Support")}>
                                    {subjectInfo["Support"]}
                                    <p>Support</p>
                                </button>

                                <button id="BugReport" onClick={() => setSubject("Bug Report")}>
                                    {subjectInfo["Bug Report"]}
                                    <p>Bug Report</p>
                                </button>

                                <button id="BusinessInquiries" onClick={() => setSubject("Business Inquiries")}>
                                    {subjectInfo["Business Inquiries"]}
                                    <p>Business Inquiries</p>
                                </button>

                                <button id="Other" onClick={() => setSubject("Other")}>
                                    {subjectInfo["Other"]}
                                    <p>Other</p>
                                </button>

                            </div>
                        </button>

                        <textarea className="message" placeholder="Type your message here…"></textarea>

                        <button className="send" onClick={() => {
                                var email = document.querySelector(".container .email input").textContent;
                                var subject = `Author: ${document.querySelector(".container .name input").value} · ${document.querySelector(".container .subject .input").textContent}`;
                                var body = document.querySelector(".container .message").value;
                                var mailto_link = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent("info@devequip.com") + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
                                window.open(mailto_link, '_blank');
                            }}>
                            <p>Send Message</p>
                        </button>
                        <sup>Dev Equip Team will respond via your email</sup>
                    </div>
                </div>
            
                <h1 className="or">OR</h1>

                <div className="discord">
                    <h1>Join Our Discord</h1>
                    <p>You may be able to get attention faster through our Discord server by joining below</p>
                    <a href="/discord/">
                        <button className="join">
                            <p>Join</p>
                        </button>
                    </a>
                    <sup>Only eligible for people above the age of 13</sup>
                </div>
            </div>
    );
}



export default RenderContactPage;