let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = './light.css.txt';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = './sky.css.txt';
  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = './purple.css.txt';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './dark.css.txt';
  }
  localStorage.setItem('style', theme);
}