
define(
	'ESP.ExtCaseForm.ExtCase'
,   [
		'ESP.ExtCaseForm.ExtCase.View',
		'Utils'
	]
,   function (
		ExtCaseView,
		Utils
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
			var PageType = container.getComponent('PageType');
			//console.log('container',container);
			PageType.registerPageType({
				name:'NewSupportCase',
				routes:['custcaseform/add'],
				view:ExtCaseView,
				
				defaultTemplate:{
					name:'esp_extcaseform_extcase.tpl',
					displayName:'Custom Case Form'
				}
			});
			var myaccountmenu = container.getComponent("MyAccountMenu");
			//console.log('myaccountmenu',myaccountmenu);
			var customcreatecase = {
				id:"customcreatecase",
				groupid:"cases",
				name:Utils.translate("Submit New Support Case"),
				index: 1,
				url: "custcaseform/add",

			}
			myaccountmenu.addGroupEntry(customcreatecase)

		}
	};
});
