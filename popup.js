document.addEventListener('DOMContentLoaded', () => {



  console.log("This is the page verifier " + onSubscriptionPage.verifyPage());
  if (authYoutubeToPocket.isAuthenticated() === true) {
    $('#pocketAuthenticationVerifier').text('You are authenticated and can add');
  }
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
