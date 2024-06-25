const list = document.querySelectorAll('.list');
const box = document.querySelectorAll('.box');

const chat_btn = document.getElementById('chat_btn');
const friends_btn = document.getElementById('friends_btn');
const publish_btn = document.getElementById('publish_btn');
const news_btn = document.getElementById('news_btn');
const profile_btn = document.getElementById('profile_btn');

const chatBox = document.getElementById('chatBox');
const friendsBox = document.getElementById('friendsBox');
const publishBox = document.getElementById('publishBox');
const newsBox = document.getElementById('newsBox');
const profileBox = document.getElementById('profileBox');

chat_btn.classList.add('active');
chatBox.style.display = 'block';

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));


function chat_Box() {
  box.forEach((item) => item.style.display = 'none');
  chatBox.style.display = 'block';
}
chat_btn.addEventListener('click', chat_Box);


function friends_Box() {
  box.forEach((item) => item.style.display = 'none');
  friendsBox.style.display = 'block';
}
friends_btn.addEventListener('click', friends_Box);


function publish_Box() {
  box.forEach((item) => item.style.display = 'none');
  publishBox.style.display = 'block';
}
publish_btn.addEventListener('click', publish_Box);


function news_Box() {
  box.forEach((item) => item.style.display = 'none');
  newsBox.style.display = 'block';
}
news_btn.addEventListener('click', news_Box);


function profile_Box() {
  box.forEach((item) => item.style.display = 'none');
  profileBox.style.display = 'block';
}
profile_btn.addEventListener('click', profile_Box);
