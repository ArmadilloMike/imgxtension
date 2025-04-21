chrome.storage.local.get(['breakAds'], result => {
    const setting = result.breakAds ?? false;    


    if (window.location.href.indexOf("imgflip.com") > -1 && setting == true) {

        (function () {
            console.log("Running content script...");

            const adBanner = document.querySelector(".ad");
            if (adBanner) {
                console.log("Success! Found .ad element. Removing...");
                adBanner.remove();
            } else {
                console.log("No .ad element found.");
            }
            

    //ad banner-ad img-ad
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === 1) { // only check elements
                            if (node.classList.contains("gen-bottom-ad.banner-ad")) {
                                console.log("Removing dynamically added '.gen-bottom-ad banner-ad' element");
                                node.remove();
                            }
                            if (node.classList.contains("base-ad-side")) {
                                console.log("Removing dynamically added '.base-ad-side' element");
                                node.remove();
                            }
                            if (node.classList.contains("ad banner-ad.img-ad")) {
                                console.log("Removing dynamically added '.base-ad-side' element");
                                node.remove();
                            }
                        }
                    }
                }
            
                // Also catch any elements that were already added silently
                const lingeringAds_b = document.querySelectorAll(".gen-bottom-ad.banner-ad");
                const lingeringAds_s = document.querySelectorAll(".base-ad-side");
                const lingeringAds_i = document.querySelectorAll(".ad.banner-ad.img-ad"); // post ads under image

                lingeringAds_b.forEach(ad => {
                    console.log("Removing lingering '.gen-bottom-ad banner-ad' element");
                    ad.remove();
                })
                lingeringAds_s.forEach(ad => {
                    console.log("Removing lingering '.gen-bottom-ad banner-ad' element");
                    ad.remove();
                })
                lingeringAds_i.forEach(ad => {
                    console.log("Removing lingering '.ad' element");
                    ad.remove();
                });
            });
            
            // Start observing the body for added nodes
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            

        })();
    }

    //gen-bottom-ad banner-ad

});