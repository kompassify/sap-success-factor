(function(){
    try {
        chrome.runtime.connect({
            name: 'kompassious-background-content'
        });

        var accountUuid = '1769c163-c9f3-4021-95ba-5e25119cb178';
        chrome.runtime.onMessage.addListener(function (message) {
            if (message.action === 'LAUNCH_KOMPASSIOUS_BUILDER') {
                var playerInitScript = document.createElement('script');
                playerInitScript.src = 'https://player.kompassify.com/kompassiousPlayer.js?uuid=' + accountUuid;
                playerInitScript.id = 'kompassious';
                (document.head || document.documentElement).appendChild(playerInitScript);

                if (localStorage.user && JSON.parse(localStorage.user).connected_email_type) {
                    localStorage.setItem('kompassiousResumeConfig', '{"13585e15-ce5b-4835-9852-686a99c2344bkompassiousTourStatus":"finished"}')
                }

                localStorage.KompassifyCustomChecklistItem = 'https://player.kompassify.com/custom-icons/white-rocket.svg'
                localStorage.KompassifyCustomChecklistStyle = 'style = "height: 31px;margin-left: 17px;margin-top: 8px;"'
                localStorage.KompassifyAnimationTimeout = 500;
            }
        });
    } catch (err) {
        console.info('[Error][Kompassious]', err);
    }
})()