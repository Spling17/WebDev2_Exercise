//Adding a note
const addNote = document.getElementById("add-btn");
addNote.addEventListener('click', (e) => {
  const newNote = document.createElement('li');
  newNote.innerHTML = ''
  
  const addList = document.getElementById("list");
  addList.appendChild("addNote");
})