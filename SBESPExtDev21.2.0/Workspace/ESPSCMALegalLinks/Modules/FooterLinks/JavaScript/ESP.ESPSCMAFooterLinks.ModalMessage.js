define(
	'ESP.ESPSCMAFooterLinks.ModalMessage',
	['SCView', 'esp_espscmamodalmessage.tpl'],
	function(SCViewComponent, my_view_tpl) {
		'use strict';

		var SCView = SCViewComponent.SCView;

		function ModalView(options) {
			SCView.call(this);
           
			this.options = options || {};

			this.template = my_view_tpl;

			
			console.log('modal options',options);
			
		}

		// Inherit parent instance methods.
		ModalView.prototype = Object.create(SCView.prototype);

		// Restore the constuctor.
		ModalView.prototype.constructor = ModalView;

		ModalView.prototype.getContext = function() {
           var isTermsandCondition = this.options.type == 'Terms'
		   return{
			   isTermsandCondition :isTermsandCondition
		   }
		}

	

		

		// Return the AMD constructor.
		return ModalView;
	}
);