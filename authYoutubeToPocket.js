var authYoutubeToPocket =
{
  consumer_key : "74855-cd72929ed5dae522bbd40fe6",
  isAuthenticated : function ()
    {
      console.log("Will add access token protection later, probably pocket_access_token");
      if (localStorage['access_token'] === undefined) {
        console.log("access token is empty");
        return false;
      } else {
        return true;
      }
    },
  authenticate: function()
    {
      console.log("Testing authenticate function");

      $.ajax
      ({
        type: "POST",
        url: "https://getpocket.com/v3/oauth/request",
        data: JSON.stringify({"consumer_key": this.consumer_key, "redirect_uri":"https://getpocket.com/"}),
        headers:
          {
            "Content-type": "application/json; charset=UTF8",
            "X-Accept" : "application/json"
          },
        dataType: "json",
        success: function( response_json) {
          console.log("request worked");
          console.log(response_json);
        } ,
        error: function(xhr, status, errorThrown)
        {
          console.log("Request didn't work");
        }
      });


    },
  logout: function()
  {
    console.log("This is the logout");
  }
}

/*

var http = new XMLHttpRequest();
var url = "https://getpocket.com/v3/oauth/request";
var params = "consumer_key=74855-cd72929ed5dae522bbd40fe6&redirect_uri=https://getpocket.com/";
http.open("POST", url, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {//Call a function when the state changes.
  if(http.readyState == 4 && http.status == 200) {
      console.log("This is the request token");
      console.log(http.responseText);
  }
}
http.send(params);
*/
