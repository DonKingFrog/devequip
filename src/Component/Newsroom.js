import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../Component/json/news.js';
import ReactMarkdown from 'react-markdown';
import './Newsroom.css';
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

                <ReactMarkdown>{jsonContent.content}</ReactMarkdown>
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
