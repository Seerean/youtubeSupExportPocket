$(document).ready(function()
{
	console.log("login.js is working");
	authYoutubeToPocket.convertAccessToken(function()
	{
		$('#login_text').html('<h3>Hey ' + localStorage['youtube2pocket_username'] +' authentication completed.');
	});
});
