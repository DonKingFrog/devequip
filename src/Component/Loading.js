import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        const preloader = document.querySelector("#preloader")
        if (preloader) { preloader.classList.add("loaded") };
    }, [])
    return (
        <div id="preloader"></div>
    );
}

export default Loading;