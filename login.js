$(document).ready(function()
{
	Auth.getAccessToken(function()
	{
		$('#login_text').html('<h3>Hey ' + localStorage['username'] +' authentication completed.');
	});
});
