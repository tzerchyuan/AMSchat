
$(document).ready(function() {
startTime();
changeColor();
});


var changeColor = function() {
  var available_colors = ['red', 'blue', 'green'];
  setInterval(function() {

    var i = Math.floor((Math.random() * available_colors.length));
    var selected_color = available_colors[i];
    var canva = $('#Canvas3')[0]
    var cont = canva.getContext('2d');
    cont.strokeStyle = selected_color;
  }, 20);
};

var initCircleS = function(second,con,can,startAngle,endAngle){
  con.clearRect(0, 0, can.width, can.height);
  if (second==0){
    endAngle=2*Math.PI;
    startAngle=0;
  }
  con.font = "60px Arial";
  con.fillText(second,can.width/2,can.height/2);
  con.beginPath();
  con.arc(can.width/2, can.height/2, 100, startAngle, endAngle, false);
  con.lineWidth =30;
  con.strokeStyle = '#fa4b2a';
  con.stroke();
}

var initCircleM = function(minute,con,can,startAngle,endAngle){
  con.clearRect(0, 0, can.width, can.height);
  if (minute==00){
    endAngle=2*Math.PI;
    startAngle=0;
  }
  con.font = "60px Arial";
  con.fillText(minute,can.width/2,can.height/2);

  con.beginPath();
  con.arc(can.width/2, can.height/2, 100, startAngle, endAngle, false);
  con.lineWidth =30;
  con.strokeStyle = '#fa4b2a';
  con.stroke();
}
var initCircleH = function(hour,con,can,startAngle,endAngle){
  con.clearRect(0, 0, can.width, can.height);
  if (hour==24){
    endAngle=2*Math.PI;
    startAngle=0;
  }
  con.font = "60px Arial";
  con.fillText(hour,can.width/2,can.height/2);

  con.beginPath();
  con.arc(can.width/2, can.height/2, 100, startAngle, endAngle, false);
  con.lineWidth =30;
  con.strokeStyle = '#fa4b2a';
  con.stroke();
}
var startTime = function() {

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);


  var canvas1 = document.getElementById('Canvas1');
  var context1 = canvas1.getContext('2d');
  var canvas2 = document.getElementById('Canvas2');
  var context2 = canvas2.getContext('2d');
  var canvas3 = document.getElementById('Canvas3');
  var context3 = canvas3.getContext('2d');

  var x = 250;
  var y = 125;
  var radius =80;
  var startAngle = -0.5 * Math.PI;

  var hourEndAngle = (h-12)/6*Math.PI-.5*Math.PI
  var minuteEndAngle = m/30*Math.PI-.5*Math.PI
  var secondEndAngle = s/30*Math.PI-.5*Math.PI

  initCircleH(h,context1,canvas1,startAngle,hourEndAngle);
  initCircleM(m,context2,canvas2,startAngle,minuteEndAngle);
  initCircleS(s,context3,canvas3,startAngle,secondEndAngle);
  var t = setInterval(function() {
    startTime()
  }, 1000);
};

var checkTime = function(i) {
  if (i < 10) {
    i = "0" + i
  };

  return i;
};
