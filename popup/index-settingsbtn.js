document.getElementById("settingsBtn").addEventListener("click", function() {
    chrome.runtime.openOptionsPage();  // Opens the options page
  });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "not_logged_in") {
    console.log("logged-out message");
    const loginMsg = document.querySelector(".user-login");
    const userTitle = document.querySelector(".user-title");

    if (loginMsg) loginMsg.textContent = "You must be logged in to use these features.";
    if (userTitle) userTitle.style.display = "none";
  }
  if (message.type === "load_data") {
    console.log("attempting to load data")
    const loginMsg = document.querySelector(".user-login");
    const userTitle = document.querySelector(".user-title");
    const username = document.querySelector(".user-title-text");
    const ico = document.querySelector(".user-title-ico");
    const points = document.querySelector(".user-title-pts");
    const msgs = document.querySelector(".user-title-msgs");

    if (loginMsg) loginMsg.style.display = "none";
    if (userTitle) userTitle.style.display = "flex";
    if (username) username.textContent = message.data.user.user;
    if (ico) ico.innerHTML = message.data.user.icon_html;
    if (points) points.textContent = "(" + message.data.user.points + ")";
    if (message.data.user.has_unread_msgs == true) {
      if (msgs) msgs.style.stroke = "#f70";
    } else {
      if (msgs) msgs.style.stroke = "#ccc";
    }



    username.addEventListener('click', function() {
      chrome.tabs.create({active: true, url: `https://imgflip.com/user/${message.data.user.user}`});
    });
    msgs.addEventListener('click', function() {
      chrome.tabs.create({active: true, url: "https://imgflip.com/memechat"});
    });
  }
});



// Send a message to background.js when the popup is opened
document.addEventListener("DOMContentLoaded", () => {
  console.log("popup message");
  chrome.runtime.sendMessage({ type: "popup_opened" });
});
