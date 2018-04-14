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
        document.getElementById("urlVerifier").textContent = "You are at the youtube subscription page.";
      } else {

      }
    });

  }
};
