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

var player = Crafty.e('2D, Canvas, Color, Twoway, Gravity')
.attr({x: 45, y: 0, w: 50, h: 50 })
  .color('green')
  .twoway(400, 260)
  .gravity('Floor');

  var info = Crafty.e('2D, DOM, Text')
  .attr({
    x: 0,
    y: 400
  });

  info.textColor('red');

  info.text('ThisIsAnEnemy');

  info.textFont({
    size: '20px',
    weight: 'bold'
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

var ground = Crafty.e('2D, Canvas, Color')
.attr({x: 0, y: 5000, w: 3000, h: 10})
.color('purple');

var music = Crafty.audio.add("bgmusic", "gamemusic.mp3");

var play = Crafty.audio.play("bgmusic", -1, 0.5);

var enemy = Crafty.e('2D, Canvas, Color, Gravity')
  .attr({x: 45, y: 300, w: 50, h: 50})
  .color('red')
  .gravity('Floor')
  .bind("UpdateFrame", function(eventData) {
    // Move to the right by 10 pixels per second
    this.x = this.x + 50 * (eventData.dt / 1000);
  });

  var options = {
    maxParticles: 150,
    size: 18,
    sizeRandom: 4,
    speed: 1,
    speedRandom: 1.2,
    // Lifespan in frames
    lifeSpan: 29,
    lifeSpanRandom: 7,
    // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
    angle: 65,
    angleRandom: 34,
    startColour: [255, 131, 0, 1],
    startColourRandom: [48, 50, 45, 0],
    endColour: [245, 35, 0, 0],
    endColourRandom: [60, 60, 60, 0],
    // Only applies when fastMode is off, specifies how sharp the gradients are drawn
    sharpness: 20,
    sharpnessRandom: 10,
    // Random spread from origin
    spread: 10,
    // How many frames should this last
    duration: -1,
    // Will draw squares instead of circle gradients
    fastMode: false,
    gravity: { x: 0, y: 0.1 },
    // sensible values are 0-3
    jitter: 0,
    // Offset for the origin of the particles
    originOffset: {x: 0, y: 0}
  };
  
  var particles = Crafty.e("2D, Canvas, Particles")
      .attr({ w: 10000, h: 10000 })
      // debug entity's bounds while developing
      // make sure particles fit into entity's bounds
      .addComponent('WiredMBR')
      // init particle animation
      .particles(options);







  
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


var load1 = Crafty.log('Character Loaded Successfully') //Character Loaded
var load2 = Crafty.log('Other Entities Loaded Successfully') //Enemies and other entetites loaded
var load3 = Crafty.log('Ground Loaded Successfully') //Ground Textures Loaded
var load4 = Crafty.log('Game Successfully loaded') //Tells user game successfully loaded
var load5 = Crafty.error('Premium not detected.') //Tells player this is not a premium version
//If at anytime none of these show up, please refresh or restart your browser
