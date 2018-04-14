
document.addEventListener('DOMContentLoaded', () => {


  $("#extensionVerifier").text("Extension working");

  onSubscriptionPage.verifyPage();
  if (authYoutubeToPocket.isAuthenticated() === true) {
    $('#pocketAuthenticationVerifier').text('Authentication worked');
  }
  document.getElementById("authenticateButton").addEventListener('click',  () => {
      console.log("This is the isAuthenticated result")
      console.log(!authYoutubeToPocket.isAuthenticated());
      authYoutubeToPocket.authenticate();

  });
  document.getElementById("clearTokenButton").addEventListener('click', () => {
    authYoutubeToPocket.logout();
  });
  document.getElementById("YoutubeScrapeToPocket").addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: "extract.js"
    }, function (result) {

        //console.log(result);
        addToPocket.YoutubeSubsToPocket(result);
    });
  });

  console.log("This log message just goes to popup console, put in a chrome.tabs to get real browser");
});
