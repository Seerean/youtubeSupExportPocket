var onSubscriptionPage =
{
  verifyPage : function ()
  {
    console.log("Is this logged?");
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

      document.getElementById("linkDisplayer").textContent = urlToBeExamined;
      if ("https://www.youtube.com/feed/subscriptions" == urlToBeExamined || "http://www.youtube.com/feed/subscriptions" == urlToBeExamined) {
        console.log("We are on the youtube feed page");
        document.getElementById("urlVerifier").textContent = "Verified";
      }

    });
  }
};
