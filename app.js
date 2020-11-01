
const activeTimers = {
    Reddit: "https://www.reddit.com",
    Facebook: "https://www.facebook.com",
	Twitter: "https://www.twitter.com"
}
const inactiveTimers = {
    Pinterest: "https://www.pinterest.com",
}


console.log("here bitch");

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
// 	console.log(tab.url);
//     if (Object.keys(activeTimers).includes(tab.url)){
//         console.log("start timing!")
//     }
// });
//
// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   // how to fetch tab url using activeInfo.tabid
//   chrome.tabs.get(activeInfo.tabId, function(tab){
//      console.log(tab.url);
//   });
// });
//
console.log("here too tho");
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log("message received");
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		console.log("active tab retrieved : " + tabs[0].url);
	});
});
