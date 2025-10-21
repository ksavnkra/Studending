let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn && (toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
})

let profile = document.querySelector('.header .flex .profile');
let search = document.querySelector('.header .flex .search-form');

let userBtn = document.querySelector('#user-btn');
userBtn && (userBtn.onclick = () =>{
   profile && profile.classList.toggle('active');
   search && search.classList.remove('active');
})

let searchBtn = document.querySelector('#search-btn');
searchBtn && (searchBtn.onclick = () =>{
   search && search.classList.toggle('active');
   profile && profile.classList.remove('active');
})

let sideBar = document.querySelector('.side-bar');

let menuBtn = document.querySelector('#menu-btn');
menuBtn && (menuBtn.onclick = () =>{
   sideBar && sideBar.classList.toggle('active');
   body.classList.toggle('active');
})

let closeBtn = document.querySelector('#close-btn');
closeBtn && (closeBtn.onclick = () =>{
   sideBar && sideBar.classList.remove('active');
   body.classList.remove('active');
})

window.onscroll = () =>{
   profile && profile.classList.remove('active');
   search && search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar && sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}