var ComponentBaseFactory = require("./ComponentBase.js");
require("../../less/ComponentPie.less");
var ComponentPieFactory = function ( config ) {
    var Component = ComponentBaseFactory( config ).addClass("ComponentPie");

    var ul = $("<ul/>"),
        li = $("<li/>"),
        a = $("<a/>"),
        span = $("<span/>");

    config.roundColor ? a.addClass( config.roundColor ) : "";
    config.firstText ? a.text( config.firstText ) : "";
    config.secondText ? span.text( config.secondText ) : "";    
    span
        .addClass("round")    
        .appendTo(a);
    a
        .addClass("round")
        .appendTo(li);
    ul.append(li);    
    Component.append(ul);       

    
    
    return Component;
}
module.exports = ComponentPieFactory;