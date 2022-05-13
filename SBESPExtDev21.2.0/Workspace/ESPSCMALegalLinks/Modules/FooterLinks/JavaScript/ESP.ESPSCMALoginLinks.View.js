// @module ESP.ESPSCMAFooterLinks.FooterLinks
define('ESP.ESPSCMALoginLinks.View'
,	[
	'esp_espscamaloginlinks_loginlinks.tpl'
	
	
	
	,	'Backbone'
	,	'ESP.ESPSCMAFooterLinks.ModalMessage'

    ]
, function (
	esp_espscmafooterlinks_footerlinks_tpl
	
	
	
	,	Backbone
	,	ModalMessageView
)
{
    'use strict';

	// @class ESP.ESPSCMAFooterLinks.FooterLinks.View @extends Backbone.View
	return Backbone.View.extend({

		template: esp_espscmafooterlinks_footerlinks_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new FooterLinksModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
			  console.log('container',options);
			  var container = options.container;
			  this.layoutcontainer = container.getComponent('Layout');

		}

	,	events: {
			'click .login-terms-link':'displayTermsContent',
            'click .login-privacy-link':'displayPrivacyContent'
		}

	,	bindings: {
		}

	, 	childViews: {

		}
	,	displayTermsContent:function displayTermsContent(e){
			var layout = this.layoutcontainer;
			if(layout){
				var modalMessage = new ModalMessageView({type:'Terms'});
				var modalMessageWasDisplayed = false;
				if(!modalMessageWasDisplayed){
					layout.showContent(modalMessage,{showInModal:true,options:{className:'legal-modal'}});
					modalMessageWasDisplayed = true;
				}
			}

		}
    ,	displayPrivacyContent:function displayPrivacyContent(e){
        var layout = this.layoutcontainer;
        if(layout){
            var modalMessage = new ModalMessageView({type:'Privacy'});
            var modalMessageWasDisplayed = false;
            if(!modalMessageWasDisplayed){
                layout.showContent(modalMessage,{showInModal:true,options:{className:'legal-modal'}});
                modalMessageWasDisplayed = true;
            }
        }

    }
		//@method getContext @return ESP.ESPSCMAFooterLinks.FooterLinks.View.Context
	,	getContext: function getContext()
		{
			//@class ESP.ESPSCMAFooterLinks.FooterLinks.View.Context
			this.message = this.message || 'Hello Login Links!!'
			return {
				message: this.message
			};
		}
	});
});
