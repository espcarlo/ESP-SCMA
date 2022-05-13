define('ESP.ExtCase.Form.View', [
    'Backbone',
    'SCFormView',
   
    'Utils',
    'esp_extcaseform_create.tpl',
    'ESP.ExtCase.ModuleView'
], function (
    Backbone,
    SCFormViewModule,
    
    Utils,
    esp_extcaseform_create,
    ModuleViews
) {
    'use strict';

    var SCFormView = SCFormViewModule.SCFormView;

    function ExtCaseFormView (options) {
        console.log('options',options);
        this.model = options.model;
        SCFormView.call(this, options.model);
        
        this.formModel.on('sync', function () {
            Backbone.history.navigate('cases', {trigger: true});
        });
        this.childViews={
            "ModuleView":function(){
                return new ModuleViews({
                    prodId:""
                });
            }
        }
        this.template = esp_extcaseform_create;
        var container = options.options.container;
       
        var environmentComponent =  container.getComponent("Environment")
        var environment_case_origin =environmentComponent.getConfig('cases.defaultValues.origin.id');
        var environment_case_status_start =environmentComponent.getConfig('cases.defaultValues.statusStart.id');
       // console.log('environment_case_setting',environment_case_origin);
        this.caseOrigin = environment_case_origin; 
        this.caseStart = environment_case_status_start;
    }

    ExtCaseFormView.prototype = Object.create(SCFormView.prototype)
    ExtCaseFormView.prototype.constructor = ExtCaseFormView;

    ExtCaseFormView.prototype.getEvents = function () {
        return {
            'submit form': 'saveForm',
            'change [data-action="product"]': 'updateModule',
            'blur :input': 'onFormFieldChange'
        }
    }
    ExtCaseFormView.prototype.updateModule = function(e){
        //console.log('asdasd');
        var modView = this.getChildViewInstance('ModuleView');
        modView.options.prodId = this.$(e.currentTarget).val();
        modView.render();
        
    }
    ExtCaseFormView.prototype.getFormFieldValue = function(input){
        var field = {
            name:input.attr('name'),
            value:input.val()
        };
        if(!this.formModel.validate(field)){
            SCFormView.prototype.removeErrorMessage.call(this,field.name)
        }
        return field
    }
    ExtCaseFormView.prototype.saveForm = function (e) {
        e.preventDefault();

        var promise = SCFormView.prototype.saveForm.call(this, e);

        return promise
    }

    ExtCaseFormView.prototype.getFormValues = function (form) {
        var formValues = form.serializeObject();
        console.log('case origin',this.caseOrigin);
        return {
            title: formValues.title,
            message: formValues.message,
            category: formValues.category,
            product:formValues.product,
            module:formValues.module,
            priority:formValues.priority,
            origin:this.caseOrigin,
            status:this.caseStart
        }
    }

    ExtCaseFormView.prototype.getContext = function () {
        console.log('thismodel',this.model);
        var productFieldOptions = this.model.get('productFieldOptions');
        var caseTypeFieldOPtions = this.model.get('caseTypeFieldOPtions');
        var priorityFieldOptions = this.model.get('priorityFieldOptions');
        return {
            productFieldOptions:productFieldOptions,
            caseTypeFieldOPtions:caseTypeFieldOPtions,
            priorityFieldOptions:priorityFieldOptions
        }
    }

    return ExtCaseFormView
})