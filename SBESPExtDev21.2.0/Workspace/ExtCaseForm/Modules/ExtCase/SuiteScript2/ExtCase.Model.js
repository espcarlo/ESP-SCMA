/**
* @NApiVersion 2.x
* @NModuleScope TargetAccount
*/
define(['N/record','N/runtime'], function (record,runtime) {
    'use strict';

    var CustomCaseForm = {
        post: function (request) {
            var body = JSON.parse(request.body);
            var extCaseForm = record.create({
                type:'supportcase'
            })
            extCaseForm.setValue({
                fieldId:'title',
                value:body.title
            });
            extCaseForm.setValue({
                fieldId:'company',
                value:runtime.getCurrentUser().id
            });
            extCaseForm.setValue({
                fieldId:'contact',
                value:runtime.getCurrentUser().contact
            });
            extCaseForm.setValue({
                fieldId:'incomingmessage',
                value:body.message
            });
            extCaseForm.setValue({
                fieldId:'category',
                value:body.category
            });
            extCaseForm.setValue({
                fieldId:'email',
                value:runtime.getCurrentUser().email
            });
            extCaseForm.setValue({
                fieldId:'product',
                value:body.product
            });
            extCaseForm.setValue({
                fieldId:'module',
                value:body.module
            });
            extCaseForm.setValue({
                fieldId:'priority',
                value:body.priority
            });
            extCaseForm.setValue({
                fieldId:'origin',
                value:body.origin
            });
            extCaseForm.setValue({
                fieldId:'status',
                value:body.status
            });
            return extCaseForm.save();
        },
        get:function(request){
            
            var extCaseRecord = record.create({
                type:'supportcase',
                isDynamic:true
            });
            var productField = extCaseRecord.getField({
                fieldId:'product'
            });
           var productFieldOptions = productField.getSelectOptions();
            var caseTypeField = extCaseRecord.getField({
                fieldId:'category'
            });
            var caseTypeFieldOPtions = caseTypeField.getSelectOptions();
            var priorityField = extCaseRecord.getField({
                fieldId:'priority'
            });
            var priorityFieldOptions = priorityField.getSelectOptions();
            var data = {
                productFieldOptions:productFieldOptions,
                caseTypeFieldOPtions:caseTypeFieldOPtions,
                priorityFieldOptions:priorityFieldOptions

            }
            return data;
        }
    }

    return CustomCaseForm
})