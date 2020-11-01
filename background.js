"use strict";

const activeTimers = {
    Reddit: "www.reddit.com",
    Facebook: "www.facebook.com",
	Twitter: "www.twitter.com"
}
const inactiveTimers = {
    Pinterest: "www.pinterest.com",
}

function activeSiteByUrl() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        let currentURL = tabs[0].url;
        for (const [site, url] of Object.entries(activeTimers)) {
            if (currentURL.includes(url)) {
                return site
            }
        }
    });
}

chrome.tabs.onUpdated.addListener(function(activeInfo) {
    let activeSiteToTrack = activeSiteByUrl();
    if (activeSiteToTrack) {
        console.log(activeSiteToTrack);
    }

});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    let activeSiteToTrack = activeSiteByUrl();
    if (activeSiteToTrack) {
        console.log(activeSiteToTrack);
    }
});

console.log("here too tho");
