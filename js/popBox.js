const pop_Box = document.getElementById('pop_Box');
const threeDots = document.getElementById('threeDots');
const body = document.getElementById('body');

const settings = document.getElementById('settings');
const about = document.getElementById('about');
const help = document.getElementById('help');

const settings_btn = document.getElementById('settings_btn');
const about_btn = document.getElementById('about_btn');
const help_btn = document.getElementById('help_btn');

const settings_Back = document.getElementById('settingsBack');
const about_Back = document.getElementById('aboutBack');
const help_Back = document.getElementById('helpBack');


function popBox() {
  if (pop_Box.style.display != 'block') {
    pop_Box.style.display = 'block';
  } else {
    pop_Box.style.display = 'none';
  }
}
threeDots.addEventListener('click', popBox);

function settingsEnter() {
  body.style.display = 'none';
  settings.style.display = 'block';
}
settings_btn.addEventListener('click', settingsEnter);

function settingsBack() {
  settings.style.display = 'none';
  body.style.display = 'block';
  pop_Box.style.display = 'none';
}
settings_Back.addEventListener('click', settingsBack);

function aboutEnter() {
  body.style.display = 'none';
  about.style.display = 'block';
}
about_btn.addEventListener('click', aboutEnter);

function aboutBack() {
  about.style.display = 'none';
  body.style.display = 'block';
  pop_Box.style.display = 'none';
}
about_Back.addEventListener('click', aboutBack);

function helpEnter() {
  body.style.display = 'none';
  help.style.display = 'block';
}
help_btn.addEventListener('click', helpEnter);

function helpBack() {
  help.style.display = 'none';
  body.style.display = 'block';
  pop_Box.style.display = 'none';
}
help_Back.addEventListener('click', helpBack);
