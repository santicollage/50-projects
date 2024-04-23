const container = document.getElementById('container');

window.addEventListener('keydown', event => {
  container.innerHTML = `
    <div class="card">
      ${event.key==' ' ? 'Space' : event.key}
      <small>KEY</small>
    </div>
    <div class="card">
      ${event.keyCode}
      <small>KEY CODE</small>
    </div>
    <div class="card">
      ${event.code}
      <small>CODE</small>
    </div>
  `;
})