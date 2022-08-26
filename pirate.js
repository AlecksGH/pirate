//I don't know if there is a header we need to use, but this is mostly written by me, Alex Jans. I did take a good amount of parts from various demos from https://github.com/sifakis/CS559F21_Demos. 

function setup() {

  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value = 0;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;
  function drawHead() {
    var context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(650,348);
    context.lineTo(725,400);
    context.lineTo(900,525);
    context.lineTo(250, 525);
    context.lineTo(250,348);
    context.closePath();
    context.fillStyle = "#e3bdac";
    context.fill();
    context.lineWidth = 4;
    context.stroke();
	//right cheekbone
    	context.beginPath();
    context.fillStyle = "#e0ad96";
    context.moveTo(725, 600);
    context.bezierCurveTo(900, 600, 900, 725, 725, 725);
    context.fill();
    context.stroke();

	//head rectangle
    context.beginPath();
    context.rect(250,450,500,1000);
    context.fillStyle = "#e3bdac";
    context.fill();

	//left cheekbone
    context.beginPath();
    context.fillStyle = "#e0ad96";
    context.lineWidth = 4;
    context.moveTo(450, 600);
    context.bezierCurveTo(275, 600, 275, 725, 450, 725);
    context.fill();
    context.stroke();
	//brow lines
    context.beginPath();
    context.fillStyle = "#e3bdac";
    context.lineWidth = 4;
    context.moveTo(750, 525);
    context.lineTo(375, 525);
    context.moveTo(635, 525);
    context.bezierCurveTo(650,525,650,500,635,450);
	//eyebrow, left
    context.moveTo(620, 525); context.lineTo(600,460);
    context.moveTo(600, 525); context.lineTo(525,460);
    context.moveTo(575, 525); context.lineTo(450,460);
    context.moveTo(550, 525); context.lineTo(375,475);
    context.moveTo(525, 525); context.lineTo(300,480);
	//eyebrow right
    context.moveTo(650, 525); context.lineTo(670,460);
    context.moveTo(670, 525); context.lineTo(745,460);
    context.moveTo(695, 525); context.lineTo(820,460);
    context.moveTo(720, 525); context.lineTo(895,475);
    context.moveTo(745, 525); context.lineTo(970,480);
    context.stroke();
	//eye
    context.beginPath();
    context.moveTo(650, 560);
    context.bezierCurveTo(650, 600, 725,600,725,560);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();
    context.stroke();
	//pupil
    context.beginPath();
    context.moveTo(675, 560);
    context.bezierCurveTo(650, 570, 700,575,700,560);
    context.fillStyle = "#000000";
    context.fill();
    context.stroke();
	//nose
    context.beginPath();
    context.moveTo(575, 525);
    context.lineTo(575, 950);
    context.bezierCurveTo(700, 950, 700, 875, 635, 875);
    context.bezierCurveTo(700, 800, 700, 600, 650, 525);
    context.closePath();
    context.fillStyle = "#c7937b";
    context.fill();
    context.stroke();
	//nostril
    context.beginPath();
    context.moveTo(575, 940);
    context.bezierCurveTo(625, 940, 625, 900, 575, 900);
    context.closePath();
    context.lineWidth = 4;
    context.fillStyle = " #a87f6c";
    context.fill();
    context.stroke();
	//top of lip thing
    context.moveTo(575, 970);
    context.bezierCurveTo(575, 1350, 610, 1100, 595, 990);
    context.stroke();
	//mouth
    context.moveTo(400,1250);
    context.lineTo(525, 1150);
    context.bezierCurveTo(580,1225,580,1225,630,1150);
   // context.lineTo(580,1225);
    context.lineTo(630,1150);
    context.lineTo(700,1250);
    context.stroke();
	//eyepatch
    context.beginPath();
    context.fillStyle = "#000000";
    context.lineWidth = 4;
    context.rect(450,525,125,100);
    context.moveTo(450,625); 
    context.bezierCurveTo(450, 725, 575, 725, 575, 625);
    context.closePath();
    context.lineWidth = 4;
    context.moveTo(575,525);
    context.lineTo(750,415);
    context.moveTo(500,650);
    context.lineTo(250,1000);
    context.stroke();
    context.fill();
	//ear
    context.beginPath();
    context.moveTo(250, 600);
    context.lineTo(250, 560);
    context.bezierCurveTo(250, 450, 100, 350, 120, 650);
    context.bezierCurveTo(100, 900, 250, 900, 250, 800);
    context.fillStyle = "#e0ad96";
    context.fill();
    context.moveTo(210, 650);
    context.bezierCurveTo(210, 450, 100, 400, 150, 625);
    context.stroke();
	//beard
    context.beginPath();
    context.fillStyle="#9C9381";
    context.rect(375,1400,150,450);
    context.rect(625,1400,125,400);
    context.fill();
    context.beginPath();
    context.moveTo(500,1300);context.bezierCurveTo(500, 1600, 500, 1800, 460, 2000);
    context.moveTo(475,1300);context.bezierCurveTo(475, 1600, 475, 1800, 460, 2000);
    context.moveTo(500,1300);context.bezierCurveTo(500, 1600, 500, 1800, 460, 2000);
    context.moveTo(375,1300);context.bezierCurveTo(355, 1600, 355, 1800, 460, 2000);
    context.moveTo(400,1300);context.bezierCurveTo(365, 1600, 365, 1800, 460, 2000);
    context.moveTo(425,1300);context.bezierCurveTo(380, 1600, 380, 1800, 460, 2000);
    context.moveTo(450,1300);context.bezierCurveTo(420, 1600, 420, 1800, 460, 2000);
    context.moveTo(525,1300);context.bezierCurveTo(525, 1600, 515, 1800, 460, 2000);
    context.moveTo(550,1250);context.bezierCurveTo(560, 1600, 530, 1800, 460, 2000);
    context.moveTo(570,1250);context.bezierCurveTo(570, 1600, 570, 1800, 460, 2000);

    context.moveTo(350,1100);context.bezierCurveTo(280, 1600, 355, 1800, 460, 2000);
    context.moveTo(325,1050);context.bezierCurveTo(270, 1600, 355, 1800, 460, 2000);
    context.moveTo(300,1100);context.bezierCurveTo(260, 1600, 345, 1800, 460, 2000);
    context.moveTo(285,1000);context.bezierCurveTo(250, 1600, 330, 1800, 460, 2000);
    context.moveTo(300,800);context.bezierCurveTo(200, 1400, 300, 1800, 460, 2000);
    context.moveTo(300,675);context.bezierCurveTo(150, 1300, 275, 1800, 460, 2000);
    context.moveTo(300,500);context.bezierCurveTo(125, 1300, 275, 1800, 460, 2000);
    context.moveTo(350,425);context.bezierCurveTo(285, 450, 250, 560, 250, 675)
    context.moveTo(325,400);context.bezierCurveTo(265, 425, 250, 510, 250, 630);
    context.moveTo(290,400);context.bezierCurveTo(245, 425, 240, 510, 230, 630);

    context.moveTo(590,1250);context.bezierCurveTo(590, 1600, 595, 1800, 700, 2000);
    context.moveTo(600,1250);context.bezierCurveTo(610, 1600, 625, 1800, 700, 2000);
    context.moveTo(625,1300);context.bezierCurveTo(650, 1600, 650, 1800, 700, 2000);
    context.moveTo(650,1300);context.bezierCurveTo(700, 1600, 700, 1800, 700, 2000);
    context.moveTo(675,1300);context.bezierCurveTo(720, 1600, 720, 1800, 700, 2000);
    context.moveTo(700,1300);context.bezierCurveTo(750, 1600, 740, 1800, 700, 2000);
    context.moveTo(725,1300);context.bezierCurveTo(770, 1600, 740, 1800, 700, 2000);
    context.moveTo(750,1300);context.bezierCurveTo(770, 1600, 760, 1800, 700, 2000);

    context.fill();
    context.stroke();
    context.beginPath();

    context.moveTo(460,970);context.bezierCurveTo(300, 1050, 300, 1800, 460, 2000);
    context.moveTo(500,970);context.bezierCurveTo(300, 1050, 300, 1800, 460, 2000);

    context.moveTo(670,970);context.bezierCurveTo(800, 1050, 800, 1800, 700, 2000);
    context.moveTo(700,970);context.bezierCurveTo(800, 1050, 800, 1800, 700, 2000);
    context.stroke();

  }
  function drawWaves(){
    canvas.width = canvas.width;
    var context2 = canvas.getContext('2d');
    context2.save();
    context2.rect(0,0,1000,1000);
    context2.stroke();
    context2.translate(1000, -1000);
    for(let i = 0; i < 17; i++){
 	context2.save();
	context2.scale(1 + i/10, 1 + i/10);
 	if(i%2 == 1){
	   context2.translate(slider1.value, 0);
	} else { context2.translate(slider1.value/-1, 0);}

        context2.beginPath();
	context2.moveTo(-1500, 500 + 10 * i);
	for(let j = -1000; j < 1000; j+=200){
          context2.bezierCurveTo(j, 600 + 30 * i, j+200, 600 + 30 * i, j+200, 500 + 30 * i);
	}
	context2.lineTo(1000, 1500);
	context2.lineTo(-1000, 1500);
	context2.closePath();
 	if(i%2 == 1){
  	 context2.fillStyle="#6bbfb8";
	} else {context2.fillStyle="#5f949c";}
	context2.fill();
	context2.stroke();
	context2.restore();
    }
    context2.restore();
  };
  function drawHat(){
    canvas.width = canvas.width;
    drawWaves();
    drawHead();
    var context3 = canvas.getContext('2d');
    context3.save();
    context3.translate(0,slider2.value/-1);
    context3.beginPath();
    context3.moveTo(0,425);
    context3.lineTo(1025,425);
    context3.bezierCurveTo(1100,350,925, 200,850, 300);
    context3.bezierCurveTo(625,-110,400, -110,175, 300);
    context3.bezierCurveTo(100,200,-75,350,0, 425);
    context3.closePath();
    context3.fillStyle="#000000";
    context3.fill()
    context3.stroke();
  };

  slider1.addEventListener("input",drawWaves);
  slider2.addEventListener("input",drawHat);
  slider1.addEventListener("input",drawHead);
  slider1.addEventListener("input",drawHat);
  drawWaves();
  drawHead();
  drawHat();
}
window.onload = setup;

