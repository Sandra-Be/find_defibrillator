// create const for Navigation bar

const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

// click function for click on outside navigtion toggle

    document.onclick = function(x){
        if(x.target.id !== 'navbar' && x.target.id !== 'toggle' && x.target.id !== 'menu'){
            toggle.classList.remove('active');
            menu.classList.remove('active');
        }
    }

// on click function for toggle in navigatin bar

    toggle.onclick = function(){
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    }