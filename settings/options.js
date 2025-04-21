document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Get all stored settings
    chrome.storage.local.get(null, (settings) => {
      document.querySelectorAll('.switch').forEach(switchEl => {
        const key = switchEl.dataset.setting;
        const state = settings[key] ? 'on' : 'off';
  
        // Step 2: Set the state attribute
        switchEl.setAttribute('state', state);
  
        // Step 3 (optional): Apply a CSS class for visual toggle
        switchEl.classList.toggle('on', state === 'on');
      });
    });
  
    // Step 4: Handle toggle on click
    document.querySelectorAll('.switch').forEach(switchEl => {
      switchEl.addEventListener('click', () => {
        const key = switchEl.dataset.setting;
        const currentState = switchEl.getAttribute('state') === 'on';
        const newState = !currentState;
  
        switchEl.setAttribute('state', newState ? 'off' : 'on');
        switchEl.classList.toggle('on', newState);
  
        chrome.storage.local.set({ [key]: newState });
        });
    });
});


  document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings and apply them
    chrome.storage.local.get(null, (settings) => {
      document.querySelectorAll('.switch').forEach(switchEl => {
        const key = switchEl.dataset.setting;
        if (settings[key]) {
          switchEl.setAttribute('state', 'on');
        } else {
          switchEl.setAttribute('state', 'off');
        }
      });
    });
  
    // Add click event to all switches
    document.querySelectorAll('.switch').forEach(switchEl => {
      switchEl.addEventListener('click', () => {
        const key = switchEl.dataset.setting;
        const currentState = switchEl.getAttribute('state') === 'on';
        const newState = !currentState;
  
        // Update UI
        switchEl.setAttribute('state', newState ? 'on' : 'off');
  
        // Save to storage
        chrome.storage.local.set({ [key]: newState }, () => {
          console.log(`Setting "${key}" set to ${newState}`);
        });
      });
    });



    // Add click event to all dropdowns
   document.querySelectorAll('.setting-drop').forEach(dropBtn => {
    dropBtn.addEventListener('click', () => {
      const key = dropBtn.dataset.setting;
      const currentState = dropBtn.getAttribute('state') === 'shown';
      const newState = !currentState;

      // Update UI
      dropBtn.setAttribute('state', newState ? 'shown' : 'hidden');
      const dropSvg = dropBtn.querySelector('.drop-svg');
      let setDesc = document.getElementById(key);
      setDesc = setDesc.querySelector('.setting-desc');
      if (dropBtn.getAttribute('state') == 'shown') {
        dropSvg.classList.add('reverted');
        setDesc.style.display = 'block';
      } else {
        dropSvg.classList.remove('reverted');
        setDesc.style.display = 'none';
      }

    });
  });
  });

  
  