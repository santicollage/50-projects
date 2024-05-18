const toggles = document.querySelectorAll('.switch');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => {toggle.addEventListener('change', (e) => verify(e))});

function verify(e) {
  if (good.checked && cheap.checked && fast.checked) {
    if (e.target == good) fast.checked = false;
    if (e.target == cheap) good.checked = false;
    if (e.target == fast) cheap.checked = false;
  }
}