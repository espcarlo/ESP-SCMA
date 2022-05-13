define(
	'ESP.ExtCase.ModuleView',
	['SCView', 'module_view.tpl','ESP.ExtCaseModule.SS2Model'],
	function(SCViewComponent, my_view_tpl,ModuleModel) {
		'use strict';

		var SCView = SCViewComponent.SCView;

		function ModuleView(options) {
			SCView.call(this);
           
			this.options = options || {};

			this.template = my_view_tpl;

			this.attributes = { id: 'ModuleView', class: 'module-view' };

			this.model = new ModuleModel();
			var self = this;
			this.model.on('change', function () {
				//console.log('model change');
				self.render();
			});
		}

		// Inherit parent instance methods.
		ModuleView.prototype = Object.create(SCView.prototype);

		// Restore the constuctor.
		ModuleView.prototype.constructor = ModuleView;

		ModuleView.prototype.getContext = function() {
            // console.log('MOduleView',this.options);
			// console.log('this model',this.model);
			var prodId = this.options.prodId;
		
			if(prodId != ""){
				this.model.fetch({
                    data: {prodId:prodId}
                });
				
			}
            var hasModule = this.model.get("moduleFieldOptions");
			if(hasModule && prodId !=""){
				hasModule = hasModule.length > 0;
			}else{
				hasModule = false;
			}
			return {
				hasModule:hasModule,
				moduleoptions: this.model.get("moduleFieldOptions") || ""
			}
		}

	

		

		// Return the AMD constructor.
		return ModuleView;
	}
);