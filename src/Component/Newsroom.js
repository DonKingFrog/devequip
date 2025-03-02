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
                const index = postId.replace("post", "") - 1;
                const data = blogPosts[index];

                if (data) {
                    setJsonContent(() => data);
                    setIsLoading(false);
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

    useEffect(() => { MetaTags.post(jsonContent, postId) }, [])

    return (
        <div className="page-newsroom frame" id="format">
            <a href="/blog" className="back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg><p>Back</p></a>
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
    );
}

export default RenderNewsPost;
