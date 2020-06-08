var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//fullscreen
c.height = window.innerHeight;
c.width = window.innerWidth;

//characters
var matrix =
  "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[];',./<>:";
//convert string to array of single characters
matrix = matrix.split("");
var font_size = 13;
var column = c.width / font_size;
//number of rain lines
var drops = [];
//array of drops one drop per column
for (var x = 0; x < column; x++) drops[x] = 0;
//initially y co-ordinate is one for all the drops
var randomArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF"
];

//ctx.fillStyle = randomArray[Math.floor(Math.random() * randomArray.length)];
//function to draw the characters
function draw() {
  //set background and trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.045)";
  ctx.fillRect(0, 0, c.width, c.height);
  //green text
  ctx.fillStyle = randomArray[Math.floor(Math.random() * randomArray.length)];
  //ctx.fillStyle = "#0F0";

  //font
  ctx.font = font_size + "px arial";

  //loop for drops
  for (var i = 0; i < drops.length; i++) {
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis

    if (drops[i] * font_size > c.height && Math.random() > 0.9) drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}
setInterval(draw, 40);
