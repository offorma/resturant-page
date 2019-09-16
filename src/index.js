import {loadHome} from './homecontent'
import {loadContact} from './contact'
import {loadAbout} from './aboutcontent'



const home = document.getElementById('home')
home.addEventListener('click',loadHome());

const about = document.getElementById('about')
about.addEventListener('click', loadAbout());

const menus = document.getElementById('contact')
menus.addEventListener('click', loadContact);

window.onload = () => {
    loadHome();
};
