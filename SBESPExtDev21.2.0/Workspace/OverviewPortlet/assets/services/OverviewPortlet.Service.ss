
function service(request, response)
{
	'use strict';
	try 
	{
		require('ESP.OverviewPortlet.OverviewPortlet.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('ESP.OverviewPortlet.OverviewPortlet.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}