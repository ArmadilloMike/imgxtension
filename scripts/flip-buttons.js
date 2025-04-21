chrome.storage.local.get(['flipBtns'], result => {
    const setting = result.flipBtns ?? false; 


    if (typeof window !== "undefined" && (window.location.href.includes("imgflip.com/i") || window.location.href.includes("imgflip.com/gif")) && setting == true) {
        console.log("Attempting to add flip buttons");

        //functions
        function encode36(input) {
            if (typeof input === 'number') {
                return input.toString(36); // Convert number to Base36
            } else {
                throw new Error('Input must be a number');
            }
        }

        function decode36(base36String) {
            return parseInt(base36String, 36); // Convert Base36 string to number
        }

        function getPostID() {
            const url = window.location.href; // Get the current URL
            const lastSlashIndex = url.lastIndexOf('/'); // Find the last occurrence of "/"
            if (lastSlashIndex !== -1) {
                return url.slice(lastSlashIndex + 1); // Extract everything after the last "/"
            }
            return ''; // Return an empty string if no "/" is found
        }
        
        window.Previous = function () {
            const currentID = getPostID();
            const prevID = decode36(currentID) - 1;
            if (prevID > 0) {
                window.location.href = `https://imgflip.com/i/${encode36(prevID)}`;
            }
        };
        window.Next = function () {
            const currentID = getPostID();
            const nextID = decode36(currentID) + 1;
            if (nextID > 0) {
                window.location.href = `https://imgflip.com/i/${encode36(nextID)}`;
            }
        };
        window.Rand = function () {
            window.location.href = `https://imgflip.com/i/${encode36(Math.floor(Math.random() * 587452000) + 1)}`;
        };
        

        //load css
        const cssUrl = chrome.runtime.getURL("scripts/flip-buttons.css");
        const link = document.createElement("link");
        link.href = cssUrl;
        link.type = "text/css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        // begin insertion
        const insertLoc = document.getElementById("img-main");
        const insertLocFallback = document.getElementsByClassName("info-page.ibox");

        if (insertLoc) {

        const insertHTML = `<div id="flip-box">
                                <button class="flip-btn prev-btn" title="Flip to previous image">
                                    <svg width="80" height="80" viewBox="5 3 30 30" fill="gray" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 7L9 12L14 17V14H20V10H14V7Z"/>
                                    </svg>
                                </button>
                                <button class="flip-btn next-btn" title="Flip to next image">
                                <svg width="80" height="80" viewBox="0 3 30 30" fill="gray" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7V10H4V14H10V17L15 12L10 7Z"/>
                                </svg>
                                </button>
                                <button class="flip-btn rand" title="Flip to a random image">
                                <svg width="130" height="80">
                                    <path d="M 10 15 L 40 15 L 60 35 L 90 35 M 10 35 L 40 35 L 60 15 L 90 15" stroke="gray" stroke-width="5" fill="none" />
                                    <path d="M 85 30 L 95 35 L 85 40 Z" fill="gray" />
                                    <path d="M 85 10 L 95 15 L 85 20 Z" fill="gray" />
                                </svg>
                                </button>
                            </div>`;

        insertLoc.insertAdjacentHTML("beforeend", insertHTML);
        console.log("added flip buttons");

        //587452000

        document.querySelector(".prev-btn").addEventListener("click", Previous);
        document.querySelector(".next-btn").addEventListener("click", Next);
        document.querySelector(".rand").addEventListener("click", Rand);

        } else if (insertLocFallback) {
            const insertLoc404 = document.getElementById("page");
    

            const insertHTML = `
                            <p style="text-align: center; margin: auto;">If you used the flip buttons, this page may no longer exist. Try Again:</p>
                            <div id="flip-box">
                                <button class="flip-btn prev-btn" title="Previous Post">
                                    <svg width="80" height="80" viewBox="5 3 30 30" fill="gray" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 7L9 12L14 17V14H20V10H14V7Z"/>
                                    </svg>
                                </button>
                                <button class="flip-btn next-btn" title="Next Post">
                                <svg width="80" height="80" viewBox="0 3 30 30" fill="gray" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7V10H4V14H10V17L15 12L10 7Z"/>
                                </svg>
                                </button>
                                <button class="flip-btn rand" title="Random Post">
                                <svg width="130" height="80">
                                    <path d="M 10 15 L 40 15 L 60 35 L 90 35 M 10 35 L 40 35 L 60 15 L 90 15" stroke="gray" stroke-width="5" fill="none" />
                                    <path d="M 85 30 L 95 35 L 85 40 Z" fill="gray" />
                                    <path d="M 85 10 L 95 15 L 85 20 Z" fill="gray" />
                                </svg>
                                </button>
                            </div>`;

            insertLoc404.insertAdjacentHTML("beforeend", insertHTML);
            console.log("added flip buttons");

            //587452000

            document.querySelector(".prev-btn").addEventListener("click", Previous);
            document.querySelector(".next-btn").addEventListener("click", Next);
            document.querySelector(".rand").addEventListener("click", Rand);

        } else {
            console.log("img-main element not found");
        }
    }
});