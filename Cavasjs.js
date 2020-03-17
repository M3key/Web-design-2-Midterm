var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cxt = canvas.getContext('2d');
//cxt.fillStyle = 'rgba(255, 0, 0, 0.6)';
//cxt.fillRect(100 , 100 , 100 , 100 );
//cxt.fillStyle = 'rgba(0, 0, 255, 0.6)';
//cxt.fillRect(400 , 100 , 100 , 100 );
//cxt.fillStyle = 'rgba(0, 255, 0, 0.6)';
//cxt.fillRect(500 , 300 , 100 , 100 );
//console.log(canvas);

//Line

//cxt.beginPath();
//cxt.moveTo(50,300);
//cxt.lineTo(300,100);
//cxt.lineTo(400,700);
//cxt.strokeStyle = "#00ff00";
//cxt.stroke();

//circle
// for(var i = 0; i < 500; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
// cxt.beginPath();
// cxt.arc(x, y, 30, 0, Math.PI * 2, false);
// cxt.strokeStyle = 'blue';
// cxt.stroke();
// }
// var circle = new Circle(200, 200, 4, 4, 40);
// var x = Math.random() * innerWidth;
// var tx = Math.random() - 0.5 * 8;
// var radius = 30;
// var y = Math.random() * innerHeight;
// var ty = Math.random() - 0.5 * 8;
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var ty = Math.random() - 0.5 * 8;
// var tx = Math.random() - 0.5 * 8;
// var radius = 30;
var mouse = {
  x: undefined,
  y :undefined
}

var maxRadius = 40;
//var minRadius = 2;

var colorArray = [
  '#ffaa33',
  '#99ffaaa',
  '#00ff00',
  '#4411aa',
  '#ff1100',

];
window.addEventListener('mousemove',
function(event) {
  mouse.x = event.x;
  mouse.y = event.y;

})
function Circle(x, y, tx, ty, radius) {
  this.x = x;
  this.y = y;
  this.tx = tx;
  this.ty = ty;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //cxt.strokeStyle = 'red';
    cxt.fillStyle = this.color;
    //cxt.stroke();
    cxt.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius
    < 0){
      this.tx = -this.tx;
    }

    if (this.y + this.radius > innerHeight || this.y -
    this.radius < 0) {
      this.ty = -this.ty;
    }
    this.x += this.tx;
    this.y += this.ty;

    //interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
    && mouse.y - this.y < 50 && mouse.y - this.y > -50
  ) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
      } else if (this.radius >this.minRadius){
        this.radius -= 1;
      }





    this.draw();
  }
}




var circleArray = [];

for(var i = 0; i < 700; i++){
  var x = Math.random() * (innerWidth -
    radius * 2) + radius;
  var y = Math.random() * (innerHeight -
  radius * 2) + radius;
  var ty = Math.random() - 0.5 * 2;
  var tx = Math.random() - 0.5 * 2;
  var radius = Math.random() * 3 + 1;
circleArray.push(new Circle(x, y, tx, ty, radius));
}


function animate() {
  requestAnimationFrame(animate);
  cxt.clearRect(0, 0, innerWidth, innerHeight);

for (var i = 0; i < circleArray.length; i++){
  circleArray[i].update();
}



}

animate();
