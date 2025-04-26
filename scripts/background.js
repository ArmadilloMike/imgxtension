function fetchData() {
  fetch("https://imgflip.com/ajax_get_le_data", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "x-requested-with": "XMLHttpRequest",
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log("User Data:", data);
      const notificationCount = data.user && data.user.nots !== undefined ? String(data.user.nots) : "";
      if (data.user.id !== 0) {
        //set badge to notifs
        chrome.action.setBadgeText({ text: notificationCount });
        chrome.action.setBadgeBackgroundColor({ color: "#D72E62" })
        console.log(`set notif count to ${notificationCount}`)
        chrome.runtime.sendMessage({ type: "load_data", data: data });
      } else {
        chrome.runtime.sendMessage({ type: "not_logged_in" });
      }
    })
    .catch(err => {
      console.error("Error fetching notifications:", err);
    });
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "popup_opened") {
    console.log("popup opened received");
    fetchData();
  }
});

fetchData();

const intervalInMinutes = .33;
const intervalInMilliseconds = intervalInMinutes * 60 * 1000;

setInterval(() => {
  fetchData();
}, intervalInMilliseconds);
