var ComponentBaseFactory = require("./ComponentBase.js");
require("../../less/ComponentLight.less");
var ComponentLightFactory = function ( config ) {
    var Component = ComponentBaseFactory( config ).addClass("ComponentLight");

    var div = $("<div class='klam'>");
    var noor_1 = $("<div class='noor one'>");
    var noor_2 = $("<div class='noor two'>");
    var p = $("<p/>")
                    .text("何铭超")
                    .appendTo(div);
                 

   Component
            .append(div)
            .append(noor_1)
            .append(noor_2);            
    return Component;
}

module.exports = ComponentLightFactory;