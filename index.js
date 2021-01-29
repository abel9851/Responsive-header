// Whole-script strict mode syntax
// Javascript is very flexible
// flexible === dangerous
'use strict';

const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_links');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
