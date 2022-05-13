// @module ESP.OverviewPortlet.OverviewPortlet
define('ESP.OverviewPortlet.OverviewPortlet.View'
,	[
	'esp_overviewportlet_overviewportlet.tpl'
	
	,	'ESP.OverviewPortlet.OverviewPortlet.SS2Model'
	
	,	'Backbone'
	,	'Utils'
	
    ]
, function (
	esp_overviewportlet_overviewportlet_tpl
	
	,	OverviewPortletSS2Model
	
	,	Backbone
	,	Utils
	
)
{
    'use strict';

	// @class ESP.OverviewPortlet.OverviewPortlet.View @extends Backbone.View
	return Backbone.View.extend({

		template: esp_overviewportlet_overviewportlet_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			//this.model = ProfileModel.getInstance();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
			  console.log(options,'options');
			  this.profileInfo = options.container.profileInfo;
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return ESP.OverviewPortlet.OverviewPortlet.View.Context
	,	getContext: function getContext()
		{
			//@class ESP.OverviewPortlet.OverviewPortlet.View.Context
			console.log('balance',this.profileInfo);
			var accountbalance = this.profileInfo.accountbalance|| ""
			accountbalance = Utils.formatCurrency(accountbalance);
			return {
				outstandingbalance: accountbalance
			};
		}
	});
});
