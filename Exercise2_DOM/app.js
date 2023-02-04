//Adding a note
// const addNote = document.getElementById("add-btn");
// addNote.addEventListener('click', (e) => {
//   const newNote = document.createElement('li');
//   newNote.innerHTML = ''
  
//   const addList = document.getElementById("list");
//   addList.appendChild("addNote");
// })

const addBtn = document.getElementById('add-btn')
const input = document.getElementById('add-input')

const addNote = (e) => {
  let inputVal = input.value
  e.preventDefault()
  const list = document.getElementById('list')
  const li = document.createElement('li')
  li.innerHTML = `<p>${inputVal}</p>
    <p>
    <i class="fa fa-pencil-square-o" aria-hidden="true"></i><i class="fa fa-times" aria-hidden="true"></i
    </p>
    <input type="text" class="edit-note">`
  list.appendChild(li)
  input.value = ''
}
addBtn.addEventListener('click', addNote)