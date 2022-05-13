/**
* @NApiVersion 2.x
* @NModuleScope TargetAccount
*/
define(['N/record'], function (record) {
    'use strict';

    var CaseModule = {
        
        get:function(request){
           
            var data = {};
            if(request.parameters){
               
                var body = request.parameters;
                var extCaseRecord = record.create({
                    type:'supportcase',
                    isDynamic:true
                });
                extCaseRecord.setValue({
                    fieldId:'product',
                    value:body.prodId
                });
                var moduleField = extCaseRecord.getField({
                    fieldId:'module'
                });
               var moduleFieldOptions = moduleField.getSelectOptions();
                
                data = {
                    moduleFieldOptions:moduleFieldOptions
                }
            }
            
           
            return data;
        }
    }

    return CaseModule
})