Install in one click on Chrome or Firefox:<br>
<a href="https://chromewebstore.google.com/detail/imgxtension/cknjefajnedieficemhbonakbpjmiphc?authuser=0&hl=en">
    <img src="https://raw.githubusercontent.com/CreeperKing77/imgxtension//main/git_assets/images/cws-badge.png" alt="Chrome Web Store" style="max-width: 100%;">
</a>
<a href="https://addons.mozilla.org/en-US/firefox/addon/imgxtension/">
    <img src="https://raw.githubusercontent.com/CreeperKing77/imgxtension//main/git_assets/images/ff-addon-badge.png" alt="Chrome Web Store" style="max-width: 100%;">
</a>
These linked versions work for all currently tested Chromium-based browsers for PC, including but not limited to Google Chrome, Chromium, Brave, and Microsoft Edge. Please raise an issue if you find issues on a given browser. It has also been tested for Firefox and Firefox Nightly (pc and android).
 
I have only so far tested this on Brave and Chrome, it should run on most Chromium based browsers. First, download the project into one folder, then go to 
chrome://extensions/

Next, there should somewhere be a switch on the screen that says “Developer Mode”. Make sure that is checked to the ON position.

Multiple buttons should appear if it was unchecked. Click “Load Unpacked”. Then, navigate through your file manager window that pops up to find the unzipped “imgflip” folder. Click it, then select “Select Folder”. Your browser should have the extension successfully installed. 



Adding features (for devs):
Any time you add a new feature, there are a few files that will need to be altered. 
First, to create your feature, you must create a script js file for it in the scripts folder. 
You will then need to add the script path to the manifest.json file.
Under settings/options.html, you will need to add the on/off setting for your new feature. Every feature starts with <div class="setting-body" id="(your setting id)">

The setting name id will be used in your js script to tell the extension if it is on or off. You need make sure all instances of the id are updated if you copy paste, and you can
add a link to your (preferably) imgflip profile or github in the credits. You can also add youself to the credits of any setting you majorly contrib to, even if you arent the creator of it. This does not include tiny changes like formatting or tiny bug fixes, only if you majorly contribute to the functionality of said setting.

Every js script file begins with
chrome.storage.local.get(['(your setting id)'], result => {
    const setting = result.(your setting id) ?? false;    
    if (window.location.href.indexOf("(url)") > -1 && setting == true) {

This ensures it only operates when turned on and on pages it should. if it only is necessary on certain pages, replace (url) with the imgflip.com/(page), otherwise just use imgflip.com.



