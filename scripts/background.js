function fetchNotifications(sessionCookie) {
  fetch("https://imgflip.com/ajax_get_le_data", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "x-requested-with": "XMLHttpRequest",
      "Cookie": `iflipsess=${sessionCookie}`, // Manually attach the cookie
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log("User Data:", data);
      const notificationCount = data.user && data.user.nots !== undefined ? String(data.user.nots) : "";
      //fixme
      chrome.action.setBadgeText({ text: notificationCount });
      chrome.action.setBadgeBackgroundColor({ color: "#D72E62" })
    })
    .catch(err => {
      console.error("Error fetching notifications:", err);
    });
}

chrome.cookies.get({ url: "https://imgflip.com", name: "iflipsess" }, function(cookie) {
  if (cookie) {
    fetchNotifications(cookie.value);
  } else {
    console.log("You must be logged in to get notifs");
  }
});

const intervalInMinutes = .33;
const intervalInMilliseconds = intervalInMinutes * 60 * 1000;

setInterval(() => {
  fetchNotifications(sessionCookie)
}, intervalInMilliseconds);
