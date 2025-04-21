chrome.storage.local.get(['topPosts'], result => {
    const setting = result.topPosts ?? false; 


    if (typeof window !== "undefined" && window.location.href.includes("imgflip.com/m") && setting == true) {
            console.log("Attempting to add top button");

            //load css
            const cssUrl = chrome.runtime.getURL("scripts/top-posts.css");
            const link = document.createElement("link");
            link.href = cssUrl;
            link.type = "text/css";
            link.rel = "stylesheet";
            document.head.appendChild(link);

            const insertLoc = document.getElementsByClassName("base-sort")[0];
            const baseLatest = document.querySelector(".base-sort .base-latest");

            if (insertLoc) {

                let url = window.location.href;
                let match = url.match(/\/m\/([^\/?]+)/);
                if (match) {
                    let groupName = match[1];
                    console.log(groupName);
                    url = "https://imgflip.com/m/" + groupName + "?sort=top-30d";

                    const link = document.createElement("a");
                    link.className = "base-top";
                    link.href = url;
                    link.textContent = "Top";
                    
                    baseLatest.insertAdjacentElement('afterend', link);
                } else {
                    console.log("No group name found");
                }
            }
        }
        //#3af300
});