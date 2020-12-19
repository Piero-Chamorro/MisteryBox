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





// function toggleMenu(){
//     const menuToggle  = document.querySelector('.toggle');
//     const navigation  = document.querySelector('.navigation')
//     menuToggle.classList.toggle('active')
//     navigation.classList.toggle('active')
// }

// Para porcentajes
function toggle(){
    var blur = document.getElementById('blur');
	blur.classList.toggle('active');	
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
}
    

