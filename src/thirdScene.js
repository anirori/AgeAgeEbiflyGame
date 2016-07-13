var ThirdLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize()

        var label = cc.LabelTTF.create("Game Over!!", "Arial", 40);
        label.setPosition(size.width / 2, size.height *3 / 5);
        this.addChild(label, 1);
        return true;
    }
  });
  var ThirdScene = cc.Scene.extend({
      onEnter: function() {
          this._super();
          var backgroundLayer = new cc.LayerColor(new cc.Color(200, 90, 200, 250));
       this.addChild(backgroundLayer);
          var layer3 = new ThirdLayer();
                 this.addChild(layer3);

    }
  });
