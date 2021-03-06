var canvas = document.getElementById("pitagora");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var context = canvas.getContext("2d");
var rectangleRatio;

function drawRectangle (input) {
  function draw (a,b) {
    var sideH = a / 2;
    var sideV = b / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(centerX-sideH,centerY+sideV);
    context.lineTo(centerX+sideH,centerY+sideV);
    context.lineTo(centerX+sideH,centerY-sideV);
    context.lineTo(centerX-sideH,centerY-sideV);
    context.lineTo(centerX-sideH,centerY+sideV);
    context.stroke(); }

  var rectSideA = document.getElementById("slider-rectangle-a").value;
  var rectSideB = document.getElementById("slider-rectangle-b").value;
  var locked = document.getElementById("checkbox-rectangle").checked;

  if (input == 'l') { rectangleRatio = rectSideA / rectSideB; }
  if (locked) {
    switch (input) {
      case 'a': rectSideB = (rectSideA / rectangleRatio).toFixed(2); break;
      case 'b': rectSideA = (rectSideB * rectangleRatio).toFixed(2); break;
    }
  }

  draw(rectSideA, rectSideB);

  // updating values
  document.getElementById("slider-rectangle-a").value = rectSideA;
  document.getElementById("slider-rectangle-b").value = rectSideB;
  document.getElementById("rectangleA").innerHTML = rectSideA;
  document.getElementById("rectangleB").innerHTML = rectSideB;
  document.getElementById("rectangleDiagonal").innerHTML = Math.sqrt(rectSideA*rectSideA + rectSideB*rectSideB).toFixed(2);
  document.getElementById("rectanglePerimeter").innerHTML = rectSideA*2 + rectSideB*2;
  document.getElementById("rectangleArea").innerHTML = rectSideA * rectSideB;
}

function drawTriangle () {
  function draw (triX,triY) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(centerX-c,centerY);
    context.lineTo(centerX+c,centerY);
    context.lineTo(triX,triY);
    context.lineTo(centerX-c,centerY);
    context.stroke(); }

  var triangle = parseInt(document.getElementById("slider-triangle").value);
  var c = document.getElementById("slider-c").value;
  var angle, triangleX, triangleY;

  c= c / 2;
  angle = triangle / 100 * 2 * Math.PI
  triangleX = centerX + c * Math.cos(angle);
  triangleY = centerY + c * Math.sin(angle);
  draw(triangleX,triangleY);

  document.getElementById("triangleAngle").innerHTML = angle.toFixed(2);
  document.getElementById("triangleC").innerHTML = c * 2;
}

function drawCircle () {
 function draw (radius) {
    context.beginPath();
    context.arc(centerX,centerY,radius,0,2*Math.PI);
    context.stroke();

    // draw radius
    context.beginPath();
    context.moveTo(centerX,centerY);
    context.lineTo(centerX+radius,centerY);
    context.stroke();
    context.fillText("r",centerX+(radius/2),centerY-10);
  }
 
  var r = parseInt(document.getElementById("slider-r").value);
  var perimeter = 2 * r * Math.PI;
  var area = r * r * Math.PI;

  perimeter = perimeter.toFixed(2);
  area = area.toFixed(2);
  context.clearRect(0, 0, canvas.width, canvas.height);

  draw(r);
    // updating values
  document.getElementById("circleRadius").innerHTML = r;
  document.getElementById("circleDiameter").innerHTML = 2 * r;
  document.getElementById("circleCircumference").innerHTML = perimeter;
  document.getElementById("circleArea").innerHTML = area;
}
