// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link1")
                .setLeft("7.111111111111111em")
                .setTop("4.444444444444445em")
                .setWidth("26.755555555555556em")
                .setHeight("1.2444444444444445em")
                .setCaption("Click the link to show website in below div")
                .setHref("https://crossui.com")
                .onClick({
                    "return":"{false}",
                    "actions":[
                        {
                            "desc":"Action 1",
                            "type":"control",
                            "target":"xui_ui_div17",
                            "args":[
                                { },
                                {
                                    "iframeAutoLoad":"{args[0].boxing().getHref()}"
                                }
                            ],
                            "method":"setProperties",
                            "event":1
                        }
                    ]
                })
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div17")
                .setLeft("4.444444444444445em")
                .setTop("12.444444444444445em")
                .setWidth("39.37777777777778em")
                .setHeight("17.155555555555555em")
                .setCustomStyle({
                    "KEY":{
                        "border-top":"solid 1px #000000",
                        "border-right":"solid 1px #000000",
                        "border-bottom":"solid 1px #000000",
                        "border-left":"solid 1px #000000"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});