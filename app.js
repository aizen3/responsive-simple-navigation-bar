//first declare vars
var mobileBtn = document.querySelector('.hamIcon');
var menu = document.querySelector('.navigation');
var closing = document.querySelector('.afterClick');
//add the event listener then at the showing class for smaller screens
mobileBtn.addEventListener('click', mobMenu);
function mobMenu(){
    menu.className += ' open';
}
closing.addEventListener('click', closingHam);
function closingHam(){
    menu.className = 'navigation';
}