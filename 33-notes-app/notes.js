const btnAdd = document.getElementById('add');
const main = document.querySelector('main');

const notesLocal = JSON.parse(localStorage.getItem('notes'));

if(notesLocal) {
  notesLocal.forEach(note => createNote(note));
  console.log(notesLocal);
}

btnAdd.addEventListener('click', () => createNote());

function createNote(text = '') {
  const noteContainer = document.createElement('div');
  noteContainer.classList.add('note');
  console.log(text);
  
  noteContainer.innerHTML = `
  <div class="note">
    <div class="note-header">
      <button class="edit button"><div></div></button>
      <button class="delete button"><div></div></button>
    </div>
    <div class="note-text ${text ? '' : 'invisible'}"></div>
    <textarea class="${text ? 'invisible' : ''}"></textarea>
  </div>
  `;
  
  const btnEdit = noteContainer.querySelector('.edit');
  const btnDelete = noteContainer.querySelector('.delete');
  const noteText = noteContainer.querySelector('.note-text');
  const textArea = noteContainer.querySelector('textarea');

  textArea.innerText = text;
  noteText.innerText = text;
  
  main.appendChild(noteContainer);
  
  btnDelete.addEventListener('click',() => {
    noteContainer.remove();
    update();
  });

  btnEdit.addEventListener('click', () => {
    noteText.classList.toggle('invisible');
    textArea.classList.toggle('invisible');
  });

  textArea.addEventListener('input',(e) => {
    noteText.innerText = e.target.value;
    update();
  });
  
}

function update() {
  const textsArea = document.querySelectorAll('textarea');

  let notes = [];

  textsArea.forEach(text => {
    notes.push(text.value)
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}