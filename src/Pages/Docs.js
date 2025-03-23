import React, { Fragment, useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import hljs from 'highlight.js';
import docs from "../Component/json/docs.js";
import MetaTags from "../Component/json/metatags.js";

function RenderDocumentation() {
    const { "*": docPath } = useParams(); 
    const [path, setPath] = useState(""); 
    const [jsonContent, setJsonContent] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const location = useLocation()
    const equal = location.hash

    useEffect(() => {
        const pathSegments = docPath.split("/");

        const cleanedSegments = pathSegments.filter((segment, index) => {
            return segment.trim() !== "" && !(index === pathSegments.length - 1 && segment.startsWith("#"));
        });

        const formattedPath = cleanedSegments
            .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
            .join("/");
        setPath(formattedPath);
    
        let currentContent = docs;
    
        for (const segment of cleanedSegments) {
            const lowerCaseSegment = segment.toLowerCase();
            
            if (cleanedSegments.length == 1) {
                currentContent = currentContent[lowerCaseSegment]
                break;
            } else if (currentContent && currentContent[lowerCaseSegment]) {
                currentContent = currentContent[lowerCaseSegment].sub || currentContent[lowerCaseSegment];
            } else {
                currentContent = null;
                break;
            }
        }

        setJsonContent(currentContent);
        setIsLoading(false);      

        setTimeout(() => {
            document.querySelectorAll("pre").forEach((pre) => {
                if (pre.querySelector("code")) {
                    const languageClass = "language-lua"; 
                    pre.querySelector("code").classList.add(languageClass);
                    hljs.highlightElement(pre.querySelector("code")); 
                }
            
                const container = document.createElement("div");
                container.className = "code-block-container";

                const wrapper = document.createElement("div");
                wrapper.className = "code-block-wrapper";
            
                const topBar = document.createElement("div");
                topBar.className = "code-block-top";
            
                const languageLabel = document.createElement("span");
                languageLabel.className = "language-label";
                languageLabel.innerText = "Lua"; 
                topBar.appendChild(languageLabel);
            
                const copyButton = document.createElement("button");
                copyButton.className = "copy-button";
                copyButton.setAttribute("aria-label", "Copy to clipboard");
                copyButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/>
                    </svg>`;
                topBar.appendChild(copyButton);
            
                copyButton.addEventListener("click", (event) => {
                    const code = pre.querySelector("code").innerText.trim(); 
                    navigator.clipboard.writeText(code).then(() => {
                        copyButton.innerHTML = "Copied!"; 
                        setTimeout(() => {
                            copyButton.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2-16-16-16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/>
                                </svg>`;
                        }, 2000);
                    }).catch((err) => {
                        console.error("Failed to copy code:", err);
                    });
                });
            
                pre.parentNode.insertBefore(container, pre); 
                wrapper.appendChild(topBar); 
                wrapper.appendChild(pre); 
                container.appendChild(wrapper);
            });
            
          
            document.querySelectorAll("h2").forEach((h2) => {
                h2.id = h2.textContent.toLowerCase();
            })
                    
        }, 10);
    }, [docPath]);

    useEffect(() => {
        import("./Documentation.css");
        
        setTimeout(() => {
            document.querySelectorAll('.page-documentation .pagecontents a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault(); 
                    if (location.hash === `#${this.getAttribute("href").substring(1)}`) return;
    
                    const targetId = this.getAttribute("href").substring(1);
                    const targetElement = document.getElementById(targetId);
    
                    if (targetElement) {
                        const headerOffset = 125;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
    
                        navigate(`#${targetId}`, { replace: true });
                    }
                });
            });
        
            if (location.hash) {
                const targetId = location.hash.substring(1); 
                const targetElement = document.getElementById(targetId);
        
                if (targetElement) {
                    const headerOffset = 125; 
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }
            } 
        }, 10);
    }, [location]);
    
    useEffect(() => { MetaTags.docs() }, [])

    const A = ({ href, children }) => {
        const { "*": docPath } = useParams();
        const isActive = href === `/docs/${docPath ? docPath : ""}`;
        return (
            <a href={href} className={isActive ? "active" : ""}>
                {children}
            </a>
        );
    };

    const AH = ({ hash, children }) => {
        const [activeHash, setActiveHash] = useState(null);
    
        useEffect(() => {
            const onScroll = () => {
                const allHashes = document.querySelectorAll("a[href^='#']");
                let closestHash = null;
                let smallestDistance = Infinity;
            
                allHashes.forEach((hashElement) => {
                    const targetSection = document.querySelector(hashElement.getAttribute("href"));
                    if (targetSection) {
                        const rect = targetSection.getBoundingClientRect();
            
                        const sectionCenter = rect.top + rect.height / 2;
                        const viewportCenter = window.innerHeight / 2 - 325;
                        const distanceToCenter = Math.abs(sectionCenter -viewportCenter);
            
                        if (distanceToCenter < smallestDistance) {
                            smallestDistance = distanceToCenter;
                            closestHash = hashElement.getAttribute("href");
                        }
                    }
                });
            
                setActiveHash(closestHash);
            };
            
    
            onScroll(); 
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll); 
        }, []);
    
        
        const isActive = hash === activeHash;
    
        return (
            <a href={hash} className={isActive ? "active" : ""}>
                {children}
            </a>
        );
    };

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
        <div className="page-documentation">
            <div className="navigation">
                <div className="dropdown-wrapper active">
                    <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                        Frameworks
                    </button>

                    <div id="content">
                        <A href="/docs/frameworks/maid/">Maid</A>
                        <A href="/docs/frameworks/promise/">Promise</A>
                        <A href="/docs/frameworks/signal/">Signal</A>
                    </div>
                </div>

                {/* <div className="dropdown-wrapper active">
                    <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                        Nexus Dynamics
                    </button>

                    <div id="content">
                        <A href="/docs/nexusdynamics/installation/">Installation</A>
                    </div>
                </div>

                <div className="dropdown-wrapper active">
                    <button id="top" onClick={(event) => { toggleDropdown(event)} }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                        Donation Board
                    </button>

                    <div id="content">
                        <A href="/docs/donationboard/installation/">Installation</A>
                    </div>
                </div> */}
            </div>

            <div className="viewport">
                <div id="path">
                    {                        
                        path.split("/").map((value, index, arr) => {
                            const href = `/docs/${arr.slice(0, index + 1).join("/")}/`.toLowerCase();

                            return (
                                <Fragment key={index}>
                                    <a href={href}>{value}</a>
                                    {index < arr.length - 1 ? <span>/</span> : null}
                                </Fragment>
                            );
                        })
                    }
                </div>
  
                <div id="content">
                    <ReactMarkdown 
                        children={jsonContent ? jsonContent.content : undefined}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    />
                </div>
            </div>
        
            <div className="pagecontents">
                { jsonContent.pagecontents ? <p id="onthispage">Table of Contents</p> : undefined }
                {
                    (jsonContent && jsonContent.pagecontents) ? jsonContent.pagecontents.map((value, index) => {
                        if (!value.sub) {
                            return (
                                <AH key={index} hash={"#"+value.name.toLowerCase()}>{value.name}</AH>
                            );
                        }

                        return (
                            <Fragment key={index}>
                                <AH key={1} hash={"#"+value.name.toLowerCase()}>{value.name}</AH>

                                {
                                    value.sub.map((subValue, jndex) => {
                                        return (
                                            <AH key={1+jndex} hash={"#"+subValue.name.toLowerCase()}><span id="sub">{subValue.name}</span></AH>
                                        );
                                    })
                                }
                            </Fragment>
                        );
                    }) : undefined
                }
            </div>
        </div>
    );
}

function RenderDocs() {
    useEffect(() => {
        import ("./Docs.css");
    })

    return(
        <div className="page-docs">
           
        </div>
    );
}

function toggleDropdown(event) {
    if (event.target.parentElement.classList.contains("active")) {
        event.target.parentElement.classList.remove("active");
    } else {
        event.target.parentElement.classList.add("active");
    }
}

export {
    RenderDocs,
    RenderDocumentation,
};
