var contentPort
var registredTabId;
var tourUuid;
var token;

chrome.runtime.onConnect.addListener(function (portFrom) {
    if (portFrom.name === 'kompassious-background-content') {
        chrome.tabs.sendMessage(portFrom.sender.tab.id, { action: 'KOMPASSIOUS_EXTENSION_ID', payload: chrome.runtime.id });
        if (portFrom.sender.url.includes(['sap.com'])) {
          chrome.tabs.sendMessage(portFrom.sender.tab.id, {
            action: 'LAUNCH_KOMPASSIOUS_BUILDER',
            tourUuid,
            token,
          });
        }
    }
});