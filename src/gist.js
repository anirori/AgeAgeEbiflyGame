for (var i = 0; i < 5; i++) {
   for (var j = 0; j < 5; j++) {

       var sprite = new cc.Sprite(res.cover_png);
       sprite.attr({
           x: size.height *0.1 + 50 * j,
           y: size.height *0.2 + 65 * i,
           scale: 1.0,
           rotation: 0
       });
       this.addChild(sprite, 0);
     }
  }
