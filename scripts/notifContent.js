// Extract notification count from the page
const notifElement = document.querySelector("#nt-count");
const count = notifElement ? notifElement.textContent.trim() : "0";

// Use console to debug
console.log(`Notification count from content script: ${count}`);

// Send the count back to the background script
chrome.runtime.sendMessage({ notificationCount: count });
