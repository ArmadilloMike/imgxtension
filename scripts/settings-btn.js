if (typeof window !== "undefined" && window.location.href.includes("imgflip.com/settings")) {
  const page = document.querySelector("#user-page");

  const btn = document.createElement("button");
  btn.className = "imgx-btn";
  btn.textContent = "imgx Settings";
  btn.style.cursor = "pointer";
  btn.style.border = "1px solid #ccc";
  btn.style.padding = "4px 8px";
  btn.style.marginBottom = "10px";

  page.prepend(btn);

  btn.addEventListener("click", () => {
    try {
        chrome.runtime.sendMessage({ action: "openOptions" });
    } catch (err) {
        browser.runtime.sendMessage({ action: "openOptions" });
    }
  });
}
