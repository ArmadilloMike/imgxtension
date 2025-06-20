
chrome.storage.local.get(['useTheme'], result => {
    const setting = result.useTheme ?? false; 


    if (typeof window !== "undefined" && window.location.href.includes("imgflip.com") && setting == true) {
        chrome.storage.local.get(['theme'], result => {
            const theme = result.theme ?? 0;

            const themes = [
                            "msmg-purple",
                            "dark-purple",
                            "orange",
                            "sky",
                            ];

            // Dynamically inject the CSS
            let cssUrl = chrome.runtime.getURL("themes.css");
            let link = document.createElement("link");
            link.href = cssUrl;
            link.type = "text/css";
            link.rel = "stylesheet";
            document.head.appendChild(link);

            // Dynamically inject the CSS
            cssUrl = chrome.runtime.getURL(`../themes/${themes[theme]}.css`);
            link = document.createElement("link");
            link.href = cssUrl;
            link.type = "text/css";
            link.rel = "stylesheet";
            document.head.appendChild(link);



            const img = document.getElementById("logo");
            const img_mobile = document.getElementById("logo-icon");


            // Wait for the theme CSS to load
            link.addEventListener('load', () => {
                console.log('Theme CSS loaded!');

                const img = document.getElementById("logo");
                const img_mobile = document.getElementById("logo-icon");

                const msmg_img = document.getElementById("msmg-logo");
                const msmg_img_mobile = document.getElementById("msmg-logo-icon");

                if (img) {
                    const style = window.getComputedStyle(document.body);
                    const titleshift = style.getPropertyValue('--titleshift');
                    const shift = titleshift ? titleshift.trim() : '0deg';
                    img.style.filter = `hue-rotate(${shift})`;
                    img_mobile.style.filter = `hue-rotate(${shift})`;

                }
            });

        });
    }
});
