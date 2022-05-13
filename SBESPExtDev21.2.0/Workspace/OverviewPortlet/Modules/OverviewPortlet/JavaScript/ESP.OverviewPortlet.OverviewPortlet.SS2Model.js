// Model.js
// -----------------------
// @module Case
define("ESP.OverviewPortlet.OverviewPortlet.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/OverviewPortlet/SuiteScript2/OverviewPortlet.Service.ss"
            ),
            true
        )
});
});
