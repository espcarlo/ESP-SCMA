// Model.js
// -----------------------
// @module Case
define("ESP.ESPSCMAFooterLinks.FooterLinks.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/FooterLinks/SuiteScript2/FooterLinks.Service.ss"
            ),
            true
        )
});
});
