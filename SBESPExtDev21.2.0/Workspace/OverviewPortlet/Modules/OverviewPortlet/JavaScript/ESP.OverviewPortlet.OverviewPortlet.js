
define(
	'ESP.OverviewPortlet.OverviewPortlet'
,   [
		'ESP.OverviewPortlet.OverviewPortlet.View'
	]
,   function (
		OverviewPortletView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			
			  
			  
			  var userprofilecomponent = container.getComponent("UserProfile");
			  userprofilecomponent.getUserProfile().then(function(profile){
				container.profileInfo = {
					accountbalance: profile.balance
				}
				
			  })
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.addChildView('QuickViewPortlet', function() { 
					return new OverviewPortletView({ container: container });
				});
			}

		}
	};
});
