var onSubscriptionPage =
{
  verifyPage : function ()
  {
    var urlToBeExamined = " url not verified ";
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
      var tab = tabs[0];
      var url = tab.url;
      urlToBeExamined = url;
      console.log("This is the url examined" + urlToBeExamined);

      if ("https://www.youtube.com/feed/subscriptions" == urlToBeExamined || "http://www.youtube.com/feed/subscriptions" == urlToBeExamined) {
        console.log("We are on the youtube feed page");
        document.getElementById("urlVerifier").textContent = "VERIFIED. Go to step 2.";
        document.getElementById("YoutubeScrapeToPocket").disabled = false;
        return true;
      } else {
        document.getElementById("urlVerifier").textContent = "NOT VERIFIED. Go to youtube feed page";
        document.getElementById("YoutubeScrapeToPocket").disabled = true;
        return false;
      }
    });

  }
};
