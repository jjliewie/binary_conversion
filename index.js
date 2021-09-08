const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Container{

  constructor(x, y, width, length, element, color){
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
    this.element = element;
    this.color = color;
  }

  draw(){
    ctx.fillStyle = "#ADD8E6";
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.length)
    ctx.fillStyle = "#ADD8E6";
    ctx.fill()
    ctx.fillStyle = this.color
    ctx.fillText(this.element, (this.x + (this.x + this.width))/2, (this.y + (this.y + this.length))/2)
  }

}

var element1 = "0"
var element2 = "0"
var element3 = "0"
var element4 = "0"
var element5 = "0"
var element6 = "0"

const color = "black";

var clicked = null;

const container1 = new Container(100, 200, 150, 300, element1, color);
const container2 = new Container(300, 200, 150, 300, element2, color);
const container3 = new Container(500, 200, 150, 300, element3, color);
const container4 = new Container(700, 200, 150, 300, element4, color);
const container5 = new Container(900, 200, 150, 300, element5, color);
const container6 = new Container(1100, 200, 150, 300, element6, color);

const containers = [container1, container2, container3, container4, container5, container6]

let animationId
function animate(){
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.font = "25px Courier"
  ctx.fillStyle = "white"
  ctx.fillText("BINARY CONVERSION!", (canvas.width/2)-200, 100)

  ctx.font = "20px Courier"

  var binary_string = "";

  containers.forEach((container, idx) => {

    binary_string += container.element;

  })
  ctx.fillText("Binary Value: " + binary_string, (canvas.width/2)-200, 700)
  var num = parseInt(binary_string, 2);

  ctx.fillText("Decimal Value: " + num, (canvas.width/2)-200, 600)

  container1.draw();
  container2.draw();
  container3.draw();
  container4.draw();
  container5.draw();
  container6.draw();

}

window.addEventListener('click', (e)=> {

  console.log(e.clientX);

  containers.forEach((container, idx) => {

    if(e.clientX > container.x && e.clientX < (container.x + container.width)){

      if (container.element == "0"){
        container.element = "1";
      }

      else if (container.element == "1"){
        container.element = "0";
      }

    }
})
})

animate()
