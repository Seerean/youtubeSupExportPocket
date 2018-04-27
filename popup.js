document.addEventListener('DOMContentLoaded', () => {


  authYoutubeToPocket.isAuthenticated();
  var redirect_uriPath = chrome.extension.getURL('login.html');
  document.getElementById("authenticationPage").setAttribute('href', redirect_uriPath);

  console.log("This is the page verifier " + onSubscriptionPage.verifyPage());
  document.getElementById("authenticateButton").addEventListener('click',  () => {
      //console.log("This is the isAuthenticated result")
      //console.log(!authYoutubeToPocket.isAuthenticated());
    if (authYoutubeToPocket.isAuthenticated() === false) {
      authYoutubeToPocket.authenticate();
    } else {
      console.log("you are already authenticated")
    }
  });
  document.getElementById("clearTokenButton").addEventListener('click', () => {
    if (authYoutubeToPocket.isAuthenticated() === true) {
      authYoutubeToPocket.logout();
    } else {
      console.log("You aren't authenticated already");
    }
  });
  document.getElementById("YoutubeScrapeToPocket").addEventListener('click', () => {
    if (authYoutubeToPocket.isAuthenticated() === true) {
      chrome.tabs.executeScript({
        file: "extract.js"
      }, function (result) {
        addToPocket.YoutubeSubsToPocket(result);
      });
    } else {
      console.log("Can't add. Not authenticated")
    }
  });

  console.log("This log message just goes to popup console, put in a chrome.tabs to get real browser");
});
