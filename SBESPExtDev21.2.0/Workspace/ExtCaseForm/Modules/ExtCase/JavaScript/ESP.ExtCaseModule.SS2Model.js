// Model.js
// -----------------------
// @module Case
define("ESP.ExtCaseModule.SS2Model", ["Backbone", "Utils","SCModel"], function(
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
    function CaseModuleModel(model, options){
       
        SCModel.call(this, model, options);
        this.urlRoot = function urlRoot () {
            return Utils.getAbsoluteUrl(
                getExtensionAssetsPath(
                    "Modules/ExtCase/SuiteScript2/ExtCaseModule.Service.ss"
                ), true
            )
        }
    }
    CaseModuleModel.prototype = Object.create(SCModel.prototype);
 
    CaseModuleModel.prototype.constructor = CaseModuleModel;
 
    return CaseModuleModel
});
