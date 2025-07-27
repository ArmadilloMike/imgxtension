chrome.storage.local.get(['frontPageBtns'], result => {
    const setting = result.frontPageBtns ?? false;    


    if (window.location.href.indexOf("imgflip.com") > -1 && setting == true) {

        (function () {
            console.log("Running content script...");

            //load css
            const cssUrl = chrome.runtime.getURL("scripts/return_fpb.css");
            const link = document.createElement("link");
            link.href = cssUrl;
            link.type = "text/css";
            link.rel = "stylesheet";
            document.head.appendChild(link);

            // inject page buttons
            const container = document.querySelector(".home-create-btns");
            if (container) {
                console.log("Re-adding the Front Page Buttons");

                html = `<a class="home-create-btn ibox" title="Chart Maker" href="https://imgflip.com/chart-maker">
                        <svg class="make-icon-pie on" viewBox="0 0 100 100">
                        <g transform="rotate(-90) translate(-100)">
                        <circle r="50" cx="50" cy="50"></circle>
                        <circle r="23" cx="50" cy="50"></circle>
                        </g>
                        </svg>
                        Chart
                        </a>
                        
                        <a class="home-create-btn ibox" title="Image Resizer" href="https://imgflip.com/image-resizer">
                        <svg class="make-icon-resize" viewBox="15 15 70 70">
                        <path d="M20 40l0 -20l20 0M60 20l20 0l0 20M80 60l0 20l-20 0M40 80l-20 0l0 -20"></path>
                        </svg>
                        Resize
                        </a>

                        <a class="home-create-btn ibox" title="Demotivational Poster Maker" href="https://imgflip.com/demotivational-maker">
                        <div class="make-icon-demo">
                        <div class="make-icon-demo-inner"></div>
                        </div>
                        Demotivator
                        </a>`
                container.innerHTML += html;
            }

            // inject menu bar buttons
            const bar = document.querySelector("#make-list");
            if (bar) {
                console.log("Re-adding the Menu Bar Buttons");
                html = `<a class="make-item" href="https://imgflip.com/chart-maker" title="Chart Maker">
                        <svg class="make-icon make-icon-pie" viewBox="0 0 100 100">
                        <g transform="rotate(-90) translate(-100)">
                        <circle r="50" cx="50" cy="50"></circle>
                        <circle r="23" cx="50" cy="50"></circle>
                        </g>
                        </svg>
                        Make a Chart
                        </a>

                        <a class="make-item" https://imgflip.com/image-resizer title="Resizer">
                        <svg class="make-icon make-icon-resize" viewBox="0 0 100 100">
                        <path d="M20 40l0 -20l20 0M60 20l20 0l0 20M80 60l0 20l-20 0M40 80l-20 0l0 -20"></path>
                        </svg>
                        Make a Chart
                        </a>

                        <a class="make-item" href="https://imgflip.com/demotivational-maker" title="Demotivational Poster Maker">
                        <div class="make-icon make-icon-demo"><div class="make-icon-demo-inner"></div></div>
                        Make a Demotivational
                        </a>`
                bar.innerHTML += html;
            }
        })();
    }

    //gen-bottom-ad banner-ad

});
