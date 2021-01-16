Crafty.init(1200,800, document.getElementById('game'));

var background = Crafty.background('white');

var floor = Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 1000, h: 10})
  .color('black');

  var floor1 = Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 500, w: 1000, h: 10})
  .color('black');

  var floor2 = Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 1000, y: 380, w: 300, h: 10})
  .color('black');

var player = Crafty.e('2D, Canvas, Color, Twoway, Gravity, Collision, Player')
.attr({x: 45, y: 0, w: 50, h: 50, health: 25 })
  .color('green')
  .twoway(400, 260)
  .gravity('Floor')
  .onHit('Solid', function(hitDatas) { // on collision with bullets
    for (var i = 0, l = hitDatas.length; i < l; ++i) { // for each bullet hit
      hitDatas[i].obj.destroy(); // destroy the bullet
      this.health = -25; // player looses health
      if (this.health <= 0) // once player's health depletes // player dies
        window.location.reload();
    }
  });


  var title = Crafty.e('2D, DOM, Text')
  .attr({
    x: 20,
    y: 145
  }); 

  title.textColor('green');

  title.text("ThisIsYou!")

  title.textFont({
    size: '20px',
    weight: 'bold'
  });

  Crafty.viewport.clampToEntities = false;
Crafty.viewport.scale(1.2);
Crafty.one("CameraAnimationDone", function() {
    Crafty.viewport.follow(player, 0, 0);
});
Crafty.viewport.centerOn(player, 10);

var ground = Crafty.e('2D, Canvas, Color, Solid')
.attr({x: -5000, y: 5000, w: 10000, h: 5000})
.setName('ground')
.color('purple');

var music = Crafty.audio.add("bgmusic", "gamemusic.mp3");

var play = Crafty.audio.play("bgmusic", -1, 0.5);




      var double = Crafty.e("2D, Canvas, Color")
      .attr({x: 100, y: 450, w: 25, h: 25 })
      .color('red');


  
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome again " + user + " It is " + Date());
    } else {
       user = prompt("Please enter your username:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
