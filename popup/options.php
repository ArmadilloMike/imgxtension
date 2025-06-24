<html>
  <body>
    <h1>Hello Extensions</h1>

    <button id="settingsBtn">Extension Settings</button>

    <script>
      document.getElementById("settingsBtn").addEventListener("click", function() {
        chrome.runtime.openOptionsPage();  // Opens the options page
      });
    </script>
  </body>
</html>
