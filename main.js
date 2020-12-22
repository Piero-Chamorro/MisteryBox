//loader
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    $('header').removeClass('relative');
}

//Select element function
const selectElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement ('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

// Para porcentajes
function toggle_soda(){
    var blur = document.getElementById('blur-soda');
	blur.classList.toggle('active');	
	var popup = document.getElementById('popup-soda');
    popup.classList.toggle('active');
}
function toggle_game(){
    var blur = document.getElementById('blur-game');
	blur.classList.toggle('active');	
	var popup = document.getElementById('popup-game');
    popup.classList.toggle('active');
}
function toggle_anime(){
    var blur = document.getElementById('blur-anime');
	blur.classList.toggle('active');	
	var popup = document.getElementById('popup-anime');
    popup.classList.toggle('active');
}
function toggle_navidad(){
    var blur = document.getElementById('blur-navidad');
	blur.classList.toggle('active');	
	var popup = document.getElementById('popup-navidad');
    popup.classList.toggle('active');
}
