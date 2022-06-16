const button = document.querySelector('.close-button');
const menu = document.querySelector('.menu-container');
const none = document.querySelector('.none');
const half = document.querySelector('.half-moon');
const butt = document.querySelector('.butt');

button.addEventListener('click', hide);
none.addEventListener('click', show);

function hide(){
    half.style.width = '0';
    menu.style.width = '0';
    menu.style.padding = '0';
    butt.style.display = 'none';
    none.style.display = 'block';
}

function show(){
    menu.style.width = '300px';
    menu.style.paddingLeft = '20px';
    half.style.width = '400px';
    butt.style.display = 'block';
    none.style.display = 'none';
}