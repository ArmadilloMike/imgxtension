chrome.storage.local.get(['pinChat'], result => {
    const setting = result.pinChat ?? false; 

    // make sure valid window location, and setting is active and not undefined
    if (typeof window !== "undefined" && window.location.href.includes("imgflip.com/memechat") && setting == true) {
        console.log("Attempting to run memechat pin script");
        chrome.storage.local.get(['pinChats'], result => {
            
            //load css
            const cssUrl = chrome.runtime.getURL("scripts/pin_memechats.css");
            const link = document.createElement("link");
            link.href = cssUrl;
            link.type = "text/css";
            link.rel = "stylesheet";
            document.head.appendChild(link);

            // get all memechats
            const memechats = document.querySelectorAll(".chat");
            // get memechat container
            const memechat_box = document.querySelector('#chat-chats');

            // create pin button container
            let fav_con = document.createElement('div');
            fav_con.classList.add('fav-container');

            

            for (const memechat of memechats) {
                let m_id = memechat.getAttribute('data-id');
                let fav_btn = document.createElement('button');
                fav_btn.classList.add('fav-btn');
                fav_btn.dataset.id = m_id;

                if (result.pinChats.includes(m_id)) {
                    html = `<svg class="fav-star set" viewBox="0 0 102 102" width="25" height="25" xmlns="http://www.w3.org/2000/svg" stroke-width="8">
                            <path d="M51,5
                                    L62.9,35.1
                                    L95,38.2
                                    L70,61
                                    L77.6,93
                                    L51,76.5
                                    L24.4,93
                                    L31.9,61
                                    L7,38.2
                                    L39.1,35.1
                                    Z" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>`
                        fav_btn.innerHTML = html;
                        fav_con.prepend(fav_btn);
                        let cur_memechat = memechat_box.querySelector(`[data-id='${m_id}']`);
                        memechat_box.prepend(cur_memechat);
                        //cur_memechat.remove();
                } else {
                    html = `<svg class="fav-star" viewBox="0 0 102 102" width="25" height="25" xmlns="http://www.w3.org/2000/svg" stroke-width="8">
                                <path d="M51,5
                                        L62.9,35.1
                                        L95,38.2
                                        L70,61
                                        L77.6,93
                                        L51,76.5
                                        L24.4,93
                                        L31.9,61
                                        L7,38.2
                                        L39.1,35.1
                                        Z" stroke-linejoin="round" stroke-linecap="round"></path>
                            </svg>`
                    fav_btn.innerHTML = html;
                    fav_con.append(fav_btn);
                }
            }

            // prepend memechat box
            memechat_box.prepend(fav_con);
            console.log('added fav_con elem');

        });

        // listener for click
        document.addEventListener('click', function(e){
            const btn = e.target.closest('.fav-btn');
            if (!btn) return;
            const star = btn.querySelector('.fav-star');
            console.log('clicked');
            chrome.storage.local.get(['pinChats'], result => {
                fav_array = result.pinChats ?? [];
                if (star.classList.contains('set')) {
                    console.log('type:set');
                    if (fav_array.includes(btn.dataset.id)) {
                        fav_array.splice(fav_array.indexOf(btn.dataset.id), 1);
                        chrome.storage.local.set({'pinChats' : fav_array});
                    }
                    star.classList.remove('set');
                } else {
                    console.log('type:unset');
                    console.log(fav_array);
                    if (!fav_array.includes(btn.dataset.id)) {
                        fav_array.push(btn.dataset.id);
                        console.log(fav_array);
                        chrome.storage.local.set({'pinChats' : fav_array});
                    }
                    star.classList.add('set');
                }
            });
        });
    }
});


/*

createElement

<button class="fav-btn">
    <svg class="fav-star" viewBox="0 0 102 102" width="25" height="25" xmlns="http://www.w3.org/2000/svg" stroke-width="8">
        <path d="M51,5
                L62.9,35.1
                L95,38.2
                L70,61
                L77.6,93
                L51,76.5
                L24.4,93
                L31.9,61
                L7,38.2
                L39.1,35.1
                Z" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</button>
*/