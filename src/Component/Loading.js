import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        const handleLoad = () => {
            const preloader = document.querySelector("#preloader")
            if (preloader) { preloader.classList.add("loaded") };
        };

        function isMobileDevice() {
            return /Mobi|Android/i.test(navigator.userAgent);
        }
        
        if (isMobileDevice()) {
            setTimeout(() => {
                handleLoad()
            }, 500);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            if (!isMobileDevice()) {
                window.removeEventListener("load", handleLoad);
            }
        };
    }, [])
    return (
        <div id="preloader"></div>
    );
}

export default Loading;