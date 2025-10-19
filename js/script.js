let profile = document.querySelector('.header .flex .profile');
document.querySelector('#search-btn').onclick = () => {
  search.classList.toggle('active');
  profile.classList.remove('active');
}

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.side-bar');
const closeBtn = document.getElementById('close-btn');

menuBtn.onclick = () => {
  sidebar.classList.add('active');
};

closeBtn.onclick = () => {
  sidebar.classList.remove('active');
};
