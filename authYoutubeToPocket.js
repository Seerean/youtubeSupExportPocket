var authYoutubeToPocket =
{
  consumer_key : "74855-cd72929ed5dae522bbd40fe6",
  isAuthenticated : function ()
    {
      console.log("Will add access token protection later, probably pocket_access_token");
      console.log(localStorage['youtube2pocket_access_token']);
      console.log(localStorage['youtube2pocket_username']);
      console.log(localStorage['youtube2pocket_request_token']);
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
        data: JSON.stringify({"consumer_key": this.consumer_key, "redirect_uri":"login.html"}),
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
          var redirect_uriPath = chrome.extension.getURL('login.html');
          chrome.tabs.create({'url': 'https://getpocket.com/auth/authorize?request_token='+ request_token+'&redirect_uri='+redirect_uriPath});
        } ,
        error: function(xhr, status, errorThrown)
        {
          console.log("Request didn't work");
        }
      });


    },
  convertAccessToken : function(callback) {
    console.log('convertAccessToken is working');
    $.ajax
    ({
      url: "https://getpocket.com/v3/oauth/authorize",
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
        console.log()
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
