var ccp = {
    PlatformerLayer: cc.Layer.extend({
        sprite:null,
        ctor: function() {
            this._super();

            console.log('platformer library layer called.');
        },
    }),
};
