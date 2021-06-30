const modal = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const modal5 = document.getElementById('myModal5');
const modal6 = document.getElementById('myModal6');
const modal7 = document.getElementById('myModal7');

const img = document.getElementsByClassName('myImg');
const img2 = document.getElementsByClassName('myImg2');
const img3 = document.getElementsByClassName('myImg3');
const img4 = document.getElementsByClassName('myImg4');
const img5 = document.getElementsByClassName('myImg5');
const img6 = document.getElementsByClassName('myImg6');
const img7 = document.getElementsByClassName('myImg7');

const modalImg = document.getElementById("img01");
const modalImg2 = document.getElementById("img02");
const modalImg3 = document.getElementById("img03");
const modalImg4 = document.getElementById("img04");
const modalImg5 = document.getElementById("img05");
const modalImg6 = document.getElementById("img06");
const modalImg7 = document.getElementById("img07");

const captionText = document.getElementById("caption");
const captionText2 = document.getElementById("caption2");
const captionText3 = document.getElementById("caption3");
const captionText4 = document.getElementById("caption4");
const captionText5 = document.getElementById("caption5");
const captionText6 = document.getElementById("caption6");
const captionText7 = document.getElementById("caption7");

const showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

//------------------------------------
const showModal2 = function(){
    modal2.style.display = "block";
    modalImg2.src = "media/ABEL-Figma.jpg";
}

for (var i = 0; i < img2.length; i++) {
    img2[i].addEventListener('click', showModal2);
}

var span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() { 
    modal2.style.display = "none";
}

//------------------------------------
const showModal3 = function(){
    modal3.style.display = "block";
    modalImg3.src = "media/GUIDE-IT-FIGMA.jpg";
}

for (var i = 0; i < img3.length; i++) {
    img3[i].addEventListener('click', showModal3);
}

var span3 = document.getElementsByClassName("close3")[0];

span3.onclick = function() { 
    modal3.style.display = "none";
}

//------------------------------------
const showModal4 = function(){
    modal4.style.display = "block";
    modalImg4.src = "media/PlantsUI-figma.jpg";
}

for (var i = 0; i < img4.length; i++) {
    img4[i].addEventListener('click', showModal4);
}

var span4 = document.getElementsByClassName("close4")[0];

span4.onclick = function() { 
    modal4.style.display = "none";
}

//------------------------------------
const showModal5 = function(){
    modal5.style.display = "block";
    modalImg5.src = "media/Podcast-app-figma.png";
}

for (var i = 0; i < img5.length; i++) {
    img5[i].addEventListener('click', showModal5);
}

var span5 = document.getElementsByClassName("close5")[0];

span5.onclick = function() { 
    modal5.style.display = "none";
}

//------------------------------------
const showModal6 = function(){
    modal6.style.display = "block";
    modalImg6.src = "media/pleo.jpg";
}

for (var i = 0; i < img6.length; i++) {
    img6[i].addEventListener('click', showModal6);
}

var span6 = document.getElementsByClassName("close6")[0];

span6.onclick = function() { 
    modal6.style.display = "none";
}

//------------------------------------
const showModal7 = function(){
    modal7.style.display = "block";
    modalImg7.src = "media/tripadvisor-figma.jpg";
}

for (var i = 0; i < img7.length; i++) {
    img7[i].addEventListener('click', showModal7);
}

var span7 = document.getElementsByClassName("close7")[0];

span7.onclick = function() { 
    modal7.style.display = "none";
}
