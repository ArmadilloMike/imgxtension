chrome.storage.local.get(['hardBlock'], result => {
    const setting = result.hardBlock ?? false; 

    if (window.location.href.indexOf("imgflip.com") > -1 && setting == true) {

        (function () {
            console.log("Running h-block script...");
            

            function tellBlocked() {
                const comCount = document.getElementById("img-coms-title");
                if (comCount && !comCount.innerText.includes("blocked")) {
                    console.log("updating comment count");
                    comCount.innerText += " (≥1 blocked)";
                }
            }


            //ad banner-ad img-ad
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === 1) { // only check elements
                            if (node.classList.contains(".bad-com")) {
                                console.log("Removing blocked comment");
                                node.remove();
                                tellBlocked();
                            }
                        }
                    }
                }
            
                // Also catch any elements that were already added silently
                const lingeringComs = document.querySelectorAll(".bad-com");

                lingeringComs.forEach(com => {
                    console.log("Removing lingering blocked comment");
                    com.remove();
                    tellBlocked();
                });
            });
            
            // Start observing the body for added nodes
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            

            const blockedCom = document.querySelector(".bad-com");
            if (blockedCom) {
                blockedCom.forEach(com => {
                console.log("Success! Found blocked comments. Removing...");
                blockedCom.remove();
                });
                tellBlocked();
            } else {
                console.log("No blocked comments found.");
            }

        })();
    }

    //gen-bottom-ad banner-ad
});