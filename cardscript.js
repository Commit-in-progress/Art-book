var myVar = setInterval(myTimer, 2000);
var imagenumber = 1;

function myTimer() {
  if (imagenumber == 1) {
    document.getElementById("tattooimg").src = 'images/tetkó.jpg';
    document.getElementById("rajzimg").src = 'images/twins.jpg';
    document.getElementById("sketchimg").src = 'images/vázlat1.jpg';
    imagenumber = 2;
  } else if (imagenumber == 2) {
    document.getElementById("tattooimg").src = 'images/tetkó.jpg';
    document.getElementById("rajzimg").src = 'images/orc.jpg';
    document.getElementById("sketchimg").src = 'images/vázlat1.jpg';
    imagenumber = 3;
  } else if (imagenumber == 3) {
    document.getElementById("tattooimg").src = 'images/tetkó.jpg';
    document.getElementById("rajzimg").src = 'images/rajz3.jpg';
    document.getElementById("sketchimg").src = 'images/vázlat1.jpg';
    imagenumber = 1;
  }
}
