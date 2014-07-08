// Global variables
var ytTabs = {};
var onIcon = 'ok.png', offIcon = 'error.png';
var onTitle = "Click to disable YouTube Looper for this tab";
var offTitle = "Click to enable YouTube Looper for this tab";

chrome.tabs.onUpdated.addListener(function(tabid, change, tab) {
   if(change.status == "complete") {
      if(/youtube.com\/.*v=[a-z0-9\-_=]{10,12}.*/i.test(tab.url))
      {
         if(!ytTabs[tabid]) {
            ytTabs[tabid] = {"icon":offIcon,"title":offTitle};
         }
         /*if(ytTabs[tabid]["icon"] && ytTabs[tabid]["title"]) {*/
            chrome.pageAction.setIcon( { "tabId":tabid,
                                         "path":ytTabs[tabid]["icon"] });
            chrome.pageAction.setTitle({ "tabId":tabid,
                                         "title":ytTabs[tabid]["title"] });
         /*}*/
         chrome.pageAction.show(tabid);
      }
      else chrome.pageAction.hide(tabid);
    }
});

chrome.pageAction.onClicked.addListener(function(tab) {
   if(ytTabs[tab.id]) {
      if(ytTabs[tab.id]["icon"] == onIcon)
         ytTabs[tab.id] = { "icon":offIcon, "title":offTitle };
      else
         ytTabs[tab.id] = { "icon":onIcon, "title":onTitle };
   }
   else {
      ytTabs[tab.id] = { "icon":onIcon, "title":onTitle };
   }
         /*if(ytTabs[tabid]["icon"] && ytTabs[tabid]["title"]) {*/
            chrome.pageAction.setIcon( { "tabId":tab.id,
                                         "path":ytTabs[tab.id]["icon"] });
            chrome.pageAction.setTitle({ "tabId":tab.id,
                                         "title":ytTabs[tab.id]["title"] });
         /*}*/
         chrome.pageAction.show(tabid);
});
