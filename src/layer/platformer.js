var PlatformerLayer = ccp.PlatformerLayer.extend({
    sprite:null,
    ctor: function() {
        this._super();

        var size = cc.winSize;

        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2;

        this.addChild(helloLabel);
    },
});
