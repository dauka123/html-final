$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

const playButton = document.getElementById("playButton");
const audio = document.getElementById("myAudio");

playButton.addEventListener("click", function() {
    audio.play(); 
});

document.getElementById('youtubeLink').addEventListener('click', function() {
    window.open('https://youtu.be/kJPTe3jImtQ', '_blank');
});

document.getElementById('youtubeLink2').addEventListener('click', function() {
    window.open('https://youtu.be/UszyyoX-dak', '_blank');
});

document.getElementById('youtubeLink3').addEventListener('click', function() {
    window.open('https://youtu.be/Uj-mtk2mZu8', '_blank');
});