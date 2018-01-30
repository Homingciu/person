var ComponentBaseFactory =  require("../Components/ComponentBase.js");
var ComponentCanvasFactory =  require("../Components/ComponentCanvas.js");
var ComponentLiFactory =  require("../Components/ComponentLi.js");
var ComponentLightFactory =  require("../Components/ComponentLight.js");
var ComponentPieFactory =  require("../Components/ComponentPie.js");
var  manage = {
    init: function ( name ) {
        name = name ? name : "wrapper";
        this.Container = $("<div/>").addClass(name);
        $(document.body).append(this.Container);
        return this;
    },
    addPage: function ( name ) {    
        name = name ? name : "page";
        this.Page = $("<div class='section'>").addClass( name );
        this.Container.append( this.Page );
        return this;
    },
    addComponent: function ( config ) {
        config = config ? config : {type: "base"};
        var Component = null;

        switch( config.type ) {
            case "base":
                Component = ComponentBaseFactory( config );
            break;
            case "canvas":
                Component = ComponentCanvasFactory( config );
            break;
            case "li":
                Component = ComponentLiFactory( config );
            break;
            case "light":
                Component = ComponentLightFactory( config );
            break;
            case "pie":
                Component = ComponentPieFactory( config );
            break;
            default:
                Component = ComponentBaseFactory( config );
            break;    
        }        
        this.Page.append(Component)
        return this;
    },
    load: function () {
        this.Container.show();
        this.Container.fullpage({
            onLeave: function (index, nextIndex, direction) {
                $(".section").eq(index - 1).trigger("pageLeave");
            },
            afterLoad: function (anchor, index) {
                $(".section").eq(index - 1).trigger("pageLoad");
            }
        });
        $(".section")
                    .on("pageLeave", function () {
                        $(this).find(".ComponentBase").trigger("leaveComponent");
                    })
                    .on("pageLoad", function () {
                        $(this).find(".ComponentBase").trigger("loadComponent");
                    })
       $(".section").eq(0).trigger("pageLoad");             
    }

}
module.exports = manage;