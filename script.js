const form = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const categorySelect = document.querySelector('#note-category');
const notesList = document.querySelector('#notes-list');

let notes = [];

function render() {
  notesList.textContent = '';
  notes.forEach(function (note) {
    const li = document.createElement('li');
    li.className = 'note category-' + note.category;

    const text = document.createElement('p');
    text.className = 'note-text';
    text.textContent = note.text;

    const footer = document.createElement('div');
    footer.className = 'note-footer';

    const info = document.createElement('span');
    const label = document.createElement('span');
    label.className = 'note-label';
    label.textContent = note.category;
    const date = document.createElement('span');
    date.textContent = note.createdAt;
    info.appendChild(label);
    info.appendChild(date);

    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'note-delete';
    del.textContent = 'Delete';

    footer.appendChild(info);
    footer.appendChild(del);
    li.appendChild(text);
    li.appendChild(footer);
    notesList.appendChild(li);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  notes.push({
    id: Date.now(),
    text: noteInput.value.trim(),
    category: categorySelect.value,
    createdAt: new Date().toLocaleString()
  });
  render();
  noteInput.value = '';
});

render();
