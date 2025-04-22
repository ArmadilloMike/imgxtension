

if (typeof window !== "undefined" && window.location.href.includes("imgflip.com/user")) {
    let username = document.querySelectorAll('#user-title-text')[0];
    username = username.querySelectorAll('.u-username')[0];

    const firstCom = document.querySelectorAll('.user-com')[0];
    const isCommunMod = firstCom.querySelectorAll('.c-mod-3')[0];
    const isGlobalMod = firstCom.querySelectorAll('.c-mod-5')[0];

    if (isCommunMod) {
        let rank = document.createElement("span");
        rank.className = `c-mod-3`;
        rank.setAttribute("title", 'Community Moderator');
        rank.textContent = ' M';
        rank.style.fontSize = "20px";

        username.insertAdjacentElement('afterend', rank);
        console.log('inserted community mod badge');
    }

    if (isGlobalMod) {
        let rank = document.createElement("span");
        rank.className = `c-mod-5`;
        rank.setAttribute("title", 'Global Moderator');
        rank.textContent = ' M';
        rank.style.fontSize = "20px";

        username.insertAdjacentElement('afterend', rank);
        console.log('inserted global mod badge');
    }

    if (!isGlobalMod && !isCommunMod) {
        console.log('not mod profile');
    }
}