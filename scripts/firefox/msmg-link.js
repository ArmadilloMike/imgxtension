chrome.storage.local.get(['msmgLink'], result => {
    const setting = result.msmgLink ?? false;

    if (typeof window !== "undefined" && window.location.href.includes("imgflip.com") && setting === true) {
        const nav = document.querySelector(".nav");
        if (!nav) return;

        // Create anchor
        const link = document.createElement("a");
        link.className = "nav";
        link.href = "/m/MS_memer_group";

        // Create desktop logo image
        const logo = document.createElement("img");
        logo.id = "logo";
        logo.alt = "Imgflip Logo";
        logo.src = chrome.runtime.getURL("images/msmg-pc.svg");

        // Create mobile logo icon
        const logoIcon = document.createElement("img");
        logoIcon.id = "logo-icon";
        logoIcon.alt = "Imgflip Logo Icon";
        logoIcon.src = chrome.runtime.getURL("images/msmg-mobile.svg");

        // Append images to anchor
        link.appendChild(logo);
        link.appendChild(logoIcon);

        // Inject the link after the first nav element
        nav.insertAdjacentElement("afterend", link);
    }
});
