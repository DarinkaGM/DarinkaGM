const modal = document.getElementById('myModal');
const img = document.getElementsByClassName('myImg');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

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
    