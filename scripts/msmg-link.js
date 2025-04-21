chrome.storage.local.get(['msmgLink'], result => {
    const setting = result.msmgLink ?? false; 

    if (typeof window !== "undefined" && window.location.href.includes("imgflip.com") && setting == true) {
        // create html
        let html = '<a class="nav" href="/m/MS_memer_group">';
                html += '<img id="logo" alt="Imgflip Logo" src="'+ chrome.runtime.getURL("images/msmg-pc.svg") +'">';
                html += '<img id="logo-icon" alt="Imgflip Logo Icon" src="'+ chrome.runtime.getURL("images/msmg-mobile.svg") +'">';
        html += '</a>';

        // generate html
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const htmlElement = temp.firstElementChild;

        // inject html
        const nav = document.querySelectorAll(`.nav`)[0];
            if (nav) {
                nav.insertAdjacentElement('afterend', htmlElement);
            }
    }
});
