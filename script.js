function change () {
  function drawRectangle (a,b) {
    var sideH = a / 2;
    var sideV = b / 2;
    context.beginPath();
    context.moveTo(centerX-sideH,centerY+sideV);
    context.lineTo(centerX+sideH,centerY+sideV);
    context.lineTo(centerX+sideH,centerY-sideV);
    context.lineTo(centerX-sideH,centerY-sideV);
    context.lineTo(centerX-sideH,centerY+sideV);
    context.stroke(); }

  function drawCircle (radius) {
    context.beginPath();
    context.arc(centerX,centerY,radius,0,2*Math.PI);
    context.stroke();

    // draw radius
    context.beginPath();
    context.moveTo(centerX,centerY);
    context.lineTo(centerX+radius,centerY);
    context.stroke(); }

  function drawTriangle (triX,triY) {
    context.beginPath();
    context.moveTo(centerX-r,centerY);
    context.lineTo(centerX+r,centerY);
    context.lineTo(triX,triY);
    context.lineTo(centerX-r,centerY);
    context.stroke(); }

  var canvas = document.getElementById("pitagora");
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var context = canvas.getContext("2d");
  var r = parseInt(document.getElementById("slider-r").value);
  var triangle = parseInt(document.getElementById("slider-triangle").value);
  var perimeter = 2 * r * Math.PI;
  var area = r * r * Math.PI;
  var angle, triangleX, triangleY;
  var rectSideA = document.getElementById("slider-rectangle-a").value;
  var rectSideB = document.getElementById("slider-rectangle-b").value;

  perimeter = perimeter.toFixed(2);
  area = area.toFixed(2);
  context.clearRect(0, 0, canvas.width, canvas.height);

  angle = triangle / 100 * 2 * Math.PI
  triangleX = centerX + r * Math.cos(angle);
  triangleY = centerY + r * Math.sin(angle);

  drawCircle(r);
  drawTriangle(triangleX,triangleY);
  drawRectangle(rectSideA,rectSideB);

  // updating values
  document.getElementById("circleRadius").innerHTML = r;
  document.getElementById("circleDiameter").innerHTML = 2 * r;
  document.getElementById("circleCircumference").innerHTML = perimeter;
  document.getElementById("circleArea").innerHTML = area;
  document.getElementById("triangleAngle").innerHTML = angle.toFixed(2);
  document.getElementById("rectangleA").innerHTML = rectSideA;
  document.getElementById("rectangleB").innerHTML = rectSideB;
  document.getElementById("rectangleDiagonal").innerHTML = Math.sqrt(rectSideA*rectSideA + rectSideB*rectSideB).toFixed(2);
  document.getElementById("rectanglePerimeter").innerHTML = rectSideA*2 + rectSideB*2;
  document.getElementById("rectangleArea").innerHTML = rectSideA * rectSideB;
}

