var ComponentBaseFactory = require("./ComponentBase.js");
require("../../less/ComponentCanvas.less");
var ComponentCanvasFactory = function ( config ) {
    var Component = ComponentBaseFactory( config ).addClass("ComponentCanvas");

    var $Canvas = $("<canvas id='canvas'>");
    var $Div_control = $("<div id='control'>");
    var div = $("<div/>");
    var h1 = $("<h1/>");
    var input_1 = $("<input id='message'>");
    input_1.val("Welcome");
    var input_2 = $("<input id='gra'>");
    input_2.val("0");
    var input_3 = $("<input id='dur'>");
    input_3.val("0.4");        
    var input_4 = $("<input id='speed'>");
    input_4.val("0.1");
    var input_5 = $("<input id='rad'>");
    input_5.val("2");
    var input_6 = $("<input id='res'>");
    input_6.val("10");

    
    
    div
        .append(h1)
        .append(input_1)
        .append(input_2)
        .append(input_3)
        .append(input_4)
        .append(input_5)
        .append(input_6)
    $Div_control.append(div);
    Component.append($Canvas);    
    Component.append($Div_control);




    return Component;
}

module.exports = ComponentCanvasFactory;