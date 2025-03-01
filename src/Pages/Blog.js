import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import "./Blog.css";

function RenderBlogPage() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [tag, setTag] = useState("All");

    useEffect(() => {
        async function loadJson() {
            try {
                const module = await import('../Component/json/news.js');
                const jsonData = module.default;
                setPosts(jsonData);
                setFilteredPosts(jsonData);
            } catch (error) {
                console.error('Failed to load JSON:', error);
            }
        }; loadJson();
        
        const buttons = document.querySelectorAll(".page-blog .main .filters button");

        buttons.forEach((element, index) => {
            element.addEventListener("click", () => {
                setTag(element.textContent);
            })
        });
    }, []);

    useEffect(() => {
        const buttons = document.querySelectorAll(".page-blog .main .filters button");

        buttons.forEach((element, index) => {
            if (element.textContent == tag) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });

        const filtered = posts.filter(post => {return (tag === 'All' || post.author.type === tag)});
        setFilteredPosts(filtered);
    })
    
    useEffect(() => {
        
    }, [tag]);

    return (
        <div className="page-blog">
            <div className="main">
                <h1>Blog</h1>
                Here, we share the latest updates, in-depth tutorials, insightful articles, and exclusive behind-the-scenes looks of our projects.
                <div className="filters">
                    <button className="active">All</button>
                    <button>News</button>
                    <button>Dev Preview</button>
                    <button>Hotfix</button>

                    <button>Release</button>
                    <button>Changelog</button>
                    <button>Story</button>
                    <button>Article</button>
                    <button>Tutorial</button>
                </div>
            </div>
            
            <div className="container">
                {filteredPosts.map((value, index) => (
                    <a href={`/react/newsroom/post${index+1}`}>
                        <img src={value.thumbnail} alt=""  id="thumbnail" />
            
                        <p id="info">{value.author.published} · {value.author.type}</p>
                        <p id="title">{value.title}</p>
                        <p id="description">{value.description}</p>
                        <p id="author"><img src={value.author.image} alt="" />{value.author.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default RenderBlogPage;