var authYoutubeToPocket =
{
  consumer_key : "74855-cd72929ed5dae522bbd40fe6",
  isAuthenticated : function ()
    {
      console.log("Will add access token protection later, probably pocket_access_token");
      if (localStorage['youtube2pocket_access_token'] === undefined) {
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
        data: JSON.stringify({"consumer_key": this.consumer_key, "redirect_uri":"https://www.youtube.com/feed/subscriptions"}),
        headers:
          {
            "Content-type": "application/json; charset=UTF8",
            "X-Accept" : "application/json"
          },
        dataType: "json",
        success: function( response_json) {
          console.log("request worked");
          console.log(response_json);
          console.log(response_json.code);
          localStorage['youtube2pocket_request_token'] = request_token = response_json.code;
          chrome.tabs.create({'url': 'https://getpocket.com/auth/authorize?request_token='+ encodeURIComponent(request_token)+'&redirect_uri='+encodeURIComponent('login.html')});
        } ,
        error: function(xhr, status, errorThrown)
        {
          console.log("Request didn't work");
        }
      });


    },
  convertAccessToken : function(callback) {
    $.ajax
    ({
      url: "https://getpocket.com/v3/oauth/request",
      type: "POST",
      headers:
      {
        'Content-Type': 'application/json; charset=UTF8',
        'X-Accept' : 'application/json'
      },
      data: JSON.stringify(
        {"consumer_key": this.consumer_key,
        "code":localStorage['youtube2pocket_request_token']
      }),
      dataType: 'json',
      success: function(response_json )
      {
        localStorage['youtube2pocket_access_token'] = response_json.access_token;
        localStorage['youtube2pocket_username'] = response_json.username;
        callback();
      },
      failure: function(xhr, status, errorThrown)
      {
        console.log("No access token made");
      }
    })
  }
  ,
  logout: function()
  {
    console.log("This is the logout");
    delete localStorage['youtube2pocket_access_token'];
    delete localStorage['youtube2pocket_username'];
    delete localStorage['youtube2pocket_request_token'];
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
