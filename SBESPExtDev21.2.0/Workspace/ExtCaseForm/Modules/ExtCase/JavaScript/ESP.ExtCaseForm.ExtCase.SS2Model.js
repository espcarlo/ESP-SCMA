// Model.js
// -----------------------
// @module Case
define("ESP.ExtCaseForm.ExtCase.SS2Model", ["Backbone", "Utils","SCModel"], function(
    Backbone,
    Utils,
    SCModelModule
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
//     return Backbone.Model.extend({
//         //@property {String} urlRoot
//         urlRoot: Utils.getAbsoluteUrl(
//             getExtensionAssetsPath(
//                 "Modules/ExtCase/SuiteScript2/ExtCase.Service.ss"
//             ),
//             true
//         )
// });
    var SCModel = SCModelModule.SCModel;
    function CustomCaseFormModel(){
        SCModel.call(this);
        this.urlRoot = function urlRoot () {
            return Utils.getAbsoluteUrl(
                getExtensionAssetsPath(
                    "Modules/ExtCase/SuiteScript2/ExtCase.Service.ss"
                ), true
            )
        }
    }
    CustomCaseFormModel.prototype = Object.create(SCModel.prototype);
 
    CustomCaseFormModel.prototype.constructor = CustomCaseFormModel;
    CustomCaseFormModel.prototype.getValidationRules = function(){
        return {
            title:[
                function (value,name){
                    if (typeof value === 'undefined' || value.length === 0 || !value.trim()) {
                        return  'Title is required'
                    }
                }
            ],
            product:[
                function(value,name){
                    if (typeof value === 'undefined' || value.length === 0 || !value.trim()) {
                        return name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
                    }
                }
            ],
            module:[
                function(value,name){
                    if (typeof value === 'undefined' || value.length === 0 || !value.trim()) {
                        return name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
                    }
                }
            ],
            category:[
                function(value,name){
                    if (typeof value === 'undefined' || value.length === 0 || !value.trim()) {
                        return 'Case Type is required'
                    }
                }
            ],
            priority:[
                function(value,name){
                    if (typeof value === 'undefined' || value.length === 0 || !value.trim()) {
                        return name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
                    }
                }
            ],
            message:[
                function(value,name){
                    if(value == ""){
                        return name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
                    }
                }
            ]
        }
    }
 
    return CustomCaseFormModel
});
