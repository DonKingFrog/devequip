import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../Component/json/news.js';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import hljs from 'highlight.js';
import MetaTags from "../Component/json/metatags.js";

function RenderNewsPost() {
    const { postId } = useParams();
    const [jsonContent, setJsonContent] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const index = postId.replace("post", "");
                const data = blogPosts[blogPosts.length - index];

                if (data) {
                    setJsonContent(() => data);
                    setIsLoading(false);

                    MetaTags.post(data, postId)
                } else {
                    throw new Error('Post not found');
                }
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        loadPost();
    }, [postId]);

    useEffect(() => {
        const imgs = document.querySelectorAll("img")
        imgs.forEach((img) => {
            img.addEventListener("click", (event) => {
                previewScreenshot(event)
            })
        })
    })

    useEffect(() => {
        import ('./Newsroom.css');

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
        
            document.querySelectorAll('img[alt*="57%"]').forEach(img => {
                img.style.width = "57%";
            });  
            
            document.querySelectorAll('img[alt*="75%"]').forEach(img => {
                img.style.width = "75%";
            });  

            document.querySelectorAll('img[alt*="100%"]').forEach(img => {
                img.style.width = "100%";
            });  
        }, 0);        
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return (
            <div className="failed">
                <h1>404</h1>
                <h2>Not Found</h2>
            </div>
        );
    }

    return (
        <>
            <button className="page-newsroom-preview" onClick={(event) => (document.querySelector(".page-newsroom-preview").classList.remove("active"))}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <img src={null} alt="" id="preview" />
            </button>

            <div className="page-newsroom frame" id="format">
                <a href="/blog/" className="back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg><p>Back</p></a>
                <h1 id="title">{jsonContent.title}</h1>
                <div className="info">
                    <p className="published">{jsonContent.author.published}</p>
                    ·
                    <p className="author">
                        <span>By</span>
                        <img src={jsonContent.author.image} alt={jsonContent.author.name} />
                        {jsonContent.author.name}
                    </p>
                </div>
                <img id="thumbnail" src={jsonContent.thumbnail} alt="Thumbnail" />

                <ReactMarkdown 
                    children={jsonContent ? jsonContent.content : undefined}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                />
            </div>
        </>
    );
}

function previewScreenshot(event) {
    const src = event.target.src
    document.querySelector(".page-newsroom-preview img").src = src
    document.querySelector(".page-newsroom-preview").classList.add("active")
}

export default RenderNewsPost;
