// Global variables
var loopingTab = null, loopingId = null;

chrome.tabs.onUpdated.addListener(function(tabid, change, tab) {
   if(change.status == "complete") {
      if(/youtube.com\//i.test(tab.url)) chrome.pageAction.show(tabid);
      else chrome.pageAction.hide(tabid);
    }
});
