var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        this.platformerLayer = new PlatformerLayer();
        this.addChild(this.platformerLayer);
        //this.addChild(new HudLayer());
        //this.addChild(new PauseLayer());
    },
    update: function(dt) {
        this.platformerLayer.step(dt); //Had to be done... lame i know... Layers don't have an update function...
    },
});
