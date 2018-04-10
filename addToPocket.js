var addToPocket =
{
  consumer_key : "74855-cd72929ed5dae522bbd40fe6",
  access_token : localStorage['youtube2pocket_access_token'],
  YoutubeSubsToPocket : function (links)
  {
    console.log("This is the array of links to add");
    console.log(links);
    for (i = 0; i < links[0].length; i++) {
      console.log("Adding " + links[0][i]);
      $.ajax
      ({
        type: "POST",
        url: "https://getpocket.com/v3/add",
        data: JSON.stringify
          ({
          "consumer_key": this.consumer_key,
          "access_token":this.access_token,
          "url": links[0][i],
          "tags": "YouTubeScrape"
          }),
        headers:
          {
              "Content-type": "application/json; charset=UTF8",
              "X-Accept" : "application/json"
          },
        dataType: "json",
        success: function(response_json)
        {
          console.log("adding successful");
        },
        error: function(xhr, status, errorThrown)
        {
          console.log("Request didn't work");
        }
      });

    }

  }
}
