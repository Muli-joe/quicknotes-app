const form = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const categorySelect = document.querySelector('#note-category');
const notesList = document.querySelector('#notes-list');
const errorMessage = document.querySelector('#error-message');
const noteCount = document.querySelector('#note-count');
const searchInput = document.querySelector('#search-input');

const MAX_LENGTH = 200;
const STORAGE_KEY = 'quicknotes';

function loadNotes() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (e) {
    return [];
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

let notes = loadNotes();

function deleteNote(id) {
  notes = notes.filter(function (note) { return note.id !== id; });
  saveNotes();
  render();
}

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = 'You have no notes yet.';
  } else if (notes.length === 1) {
    noteCount.textContent = 'You have 1 note.';
  } else {
    noteCount.textContent = 'You have ' + notes.length + ' notes.';
  }
}

function render() {
  notesList.textContent = '';
  const query = searchInput.value.trim().toLowerCase();
  const visible = notes.filter(function (note) {
    return note.text.toLowerCase().includes(query);
  });

  if (notes.length > 0 && visible.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'no-results';
    empty.textContent = 'No notes match your search.';
    notesList.appendChild(empty);
  }

  visible.forEach(function (note) {
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
    del.addEventListener('click', function () { deleteNote(note.id); });

    footer.appendChild(info);
    footer.appendChild(del);
    li.appendChild(text);
    li.appendChild(footer);
    notesList.appendChild(li);
  });
  updateCount();
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const text = noteInput.value.trim();
  if (text === '') {
    errorMessage.textContent = 'Please type a note first.';
    return;
  }
  if (text.length > MAX_LENGTH) {
    errorMessage.textContent = 'Notes must be 200 characters or fewer.';
    return;
  }
  errorMessage.textContent = '';
  notes.push({
    id: Date.now(),
    text: text,
    category: categorySelect.value,
    createdAt: new Date().toLocaleString()
  });
  saveNotes();
  render();
  noteInput.value = '';
});

searchInput.addEventListener('input', render);

render();
