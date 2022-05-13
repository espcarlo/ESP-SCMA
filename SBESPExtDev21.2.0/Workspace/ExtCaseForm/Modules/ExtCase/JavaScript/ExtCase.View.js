// @module ESP.ExtCaseForm.ExtCase
define('ESP.ExtCaseForm.ExtCase.View'
,	[
	'esp_extcaseform_extcase.tpl'
	
	,	'ESP.ExtCaseForm.ExtCase.SS2Model'
	
	,	'Backbone'
	,	'PageType.Base.View'
	,	'ESP.ExtCase.Form.View'
	,	'Utils'
	
	
    ]
, function (
	esp_extcaseform_extcase_tpl
	
	,	ExtCaseSS2Model
	
	,	Backbone
	,	PageTypeBaseView
	, 	ExtCaseFormView
	,	Utils
	
)
{
    'use strict';

	// @class ESP.ExtCaseForm.ExtCase.View @extends Backbone.View
	return PageTypeBaseView.PageTypeBaseView.extend({

		template: esp_extcaseform_extcase_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			
			this.model = new ExtCaseSS2Model();
			
			
         	
		}
	,	beforeShowContent: function beforeShowContent(){
		console.log('bconten',this.options);
			this.childViews = {
				'ESP.ExtCase.Form.View':function(){
					return new ExtCaseFormView({
						 model:this.model,
						 options: this.options
					})
				}
			}
			this.getBreadcrumbPages = function () {
				return [
					{
						text: Utils.translate('Cases'),
						href: '/cases'
					},
					{
						text: 'New Support Case'
					}
				]
			};
			this.title = Utils.translate('Submit New Support Case');

            return this.model.fetch();
		}

	,	events: {
			
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return ESP.ExtCaseForm.ExtCase.View.Context
	,	getContext: function getContext()
		{
			//@class ESP.ExtCaseForm.ExtCase.View.Context
			
			return {
				
			};
		}
	});
});
