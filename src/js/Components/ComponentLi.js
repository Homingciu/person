var ComponentBaseFactory = require("./ComponentBase.js");
require("../../less/ComponentLi.less"); 



var ComponentLiFactory = function ( config ) {
    var Component = ComponentBaseFactory( config ).addClass("ComponentLi");

    var ul = $("<ul/>").addClass("list");
    var i,
        len = config.liNumber;
    for(i = 0; i < len; i ++) {
        $("<li/>")
                    .text(config.information[i] ? config.information[i] : "")
                    .appendTo(ul);
    }




    Component.append(ul);
    return Component;
}

module.exports = ComponentLiFactory;