chrome.storage.local.get(['showIcons'], result => {
    const setting = result.showIcons ?? false; 


    if (typeof window !== "undefined" && window.location.href.includes("imgflip.com/settings") && setting == true) {

        // point reqs
        const iconPoints = ["0",
                            "10",
                            "20",
                            "30",
                            "100",
                            "500",
                            "1k",
                            "2k",
                            "3k",
                            "6k",
                            "10k",
                            "20k",
                            "30k",
                            "40k",
                            "60k",
                            "80k",
                            "100k",
                            "120k",
                            "140k",
                            "160k",
                            "180k",
                            "200k",
                            "220k",
                            "250k",
                            "290k",
                            "340k",
                            "400k",
                            "470k",
                            "550k",
                            "640k",
                            "740k",
                            "840k",
                            "1M",
                            "1.2M",
                            "1.8M",
                            "2.7M",
                            "4M",
                            "6M",
                            "9M",
                            "14M",
                            "24M",
                            "36M",
                            "48M",
                            "Developer Only"
                            ];


        const icons = document.querySelectorAll(".ico");
        let lastIco = icons[icons.length - 3];
        lastIco = parseInt(lastIco.dataset.icon);
        console.log(lastIco);

        let remainingIcos = 43 - lastIco;
        for (let i = (lastIco + 1); i < 44; i++) {
            let icon = document.createElement("div");
            icon.className = `ico ico${i}`;
            icon.dataset.icon = i;
            icon.style.pointerEvents = "auto";  // allows hover for tooltips
            icon.style.cursor = "default";      // prevents pointer click feel
            icon.onclick = (e) => e.preventDefault(); // blocks actual click

            icon.style.filter = "grayscale(30%)";
            icon.style.opacity = "0.5";
            icon.setAttribute("title", iconPoints[i - 1] || "Unknown");

            lastIco = document.querySelectorAll(`.ico.ico${i - 1}`)[0];
            if (lastIco) {
            lastIco.insertAdjacentElement('afterend', icon);
            }
        }

        let icon = document.createElement("div");
        icon.className = `ico ico46`;
        icon.dataset.icon = 46;
        icon.style.pointerEvents = "auto";  // allows hover for tooltips
        icon.style.cursor = "default";      // prevents pointer click feel
        icon.onclick = (e) => e.preventDefault(); // blocks actual click
        icon.style.filter = "grayscale(30%)";
        icon.style.opacity = "0.5";
        icon.setAttribute("title", iconPoints[43] || "Unknown");

        lastIco = document.querySelectorAll(`.ico.ico43`)[0];
        if (lastIco) {
            lastIco.insertAdjacentElement('afterend', icon);
        }
    }
});