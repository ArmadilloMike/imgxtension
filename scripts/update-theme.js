chrome.storage.local.get(['useTheme'], result => {
    const setting = result.useTheme ?? false; 


    if (typeof window !== "undefined" && window.location.href.includes("imgflip.com") && setting == true) {
        // Dynamically inject the CSS
        const cssUrl = chrome.runtime.getURL("themes.css");
        const link = document.createElement("link");
        link.href = cssUrl;
        link.type = "text/css";
        link.rel = "stylesheet";
        document.head.appendChild(link);



        const img = document.getElementById("logo");
        const img_mobile = document.getElementById("logo-icon");

        if (img) {
            let newSrc = "";
            newSrc = chrome.runtime.getURL("images/imgflip-hue.png");
            img.src = newSrc;
            newSrc = chrome.runtime.getURL("images/imgmob-hue.png");
            img_mobile.src = newSrc;
        }
    }
});