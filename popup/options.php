<html>
  <body>
    <h1>Hello Extensions</h1>

    <button id="settingsBtn">Extension Settings</button>

    <script>
      document.getElementById("settingsBtn").addEventListener("click", function() {
        chrome.runtime.openOptionsPage();  // Opens the options page
      });

      const manifest = chrome.runtime.getManifest();
      const manifestVersion = manifest.manifest_version;
      
      let box = document.querySelector('.user-title')
      const html = `<br><p>version: ${manifestVersion}</p>`;
    </script>
  </body>
</html>
