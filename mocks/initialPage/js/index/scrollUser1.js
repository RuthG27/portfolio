var slider = document.getElementById('slider');
var active = document.getElementById('active');
var linea1 = document.getElementById('linea1');
var linea2 = document.getElementById('linea2');
var linea3 = document.getElementById('linea3');
var linea4 = document.getElementById('linea4');
var linea5 = document.getElementById('linea5');
var linea6 = document.getElementById('linea6');
var linea7 = document.getElementById('linea7');
var linea8 = document.getElementById('linea8');
var linea9 = document.getElementById('linea9');
var linea10 = document.getElementById('linea10');

linea1.onclick = function () {
  slider.style.transform = 'translateX(0)';
  active.style.top = '0px';
};
linea2.onclick = function () {
  slider.style.transform = 'translateX(-10%)';
  active.style.top = '80px';
};

linea3.onclick = function () {
  slider.style.transform = 'translateX(-20%)';
  active.style.top = '160px';
};

linea4.onclick = function () {
  slider.style.transform = 'translateX(-30%)';
  active.style.top = '240px';
};

linea5.onclick = function () {
  slider.style.transform = 'translateX(-40%)';
  active.style.top = '320px';
};

linea6.onclick = function () {
  slider.style.transform = 'translateX(-50%)';
  active.style.top = '400px';
};

linea7.onclick = function () {
  slider.style.transform = 'translateX(-60%)';
  active.style.top = '480px';
};

linea8.onclick = function () {
  slider.style.transform = 'translateX(-70%)';
  active.style.top = '560px';
};

linea9.onclick = function () {
  slider.style.transform = 'translateX(-80%)';
  active.style.top = '640px';
};

linea10.onclick = function () {
  slider.style.transform = 'translateX(-90%)';
  active.style.top = '720px';
};
