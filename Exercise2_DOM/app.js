//Adding a note

const form = document.querySelector("#add")
const input = document.querySelector("#add-input")
const list = document.querySelector("#list")

form.addEventListener("submit", function(evt){
  evt.preventDefault()
  // console.log("submitted")
  const inputValue = evt.target[0].value
  console.log(evt.target[0].value);
  if(!inputValue) return;
  
  const newEl = document.createElement('li')
  newEl.innerHTML = `<p>${inputValue}</p><p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p><input type="text" class="edit-note" />`;
  list.appendChild(newEl)
})


// const addBtn = document.getElementById("add-btn");
// const addNote = document.

// addNote.addEventListener('click', (e) => {
//   const newNote = document.createElement('li');
//   newNote.innerHTML = ''
  
//   const addList = document.getElementById("list");
//   addList.appendChild("addNote");
// })



// const addBtn = document.getElementById('add-btn')
// const input = document.getElementById('add-input')

// const addNote = (e) => {
//   let inputVal = input.value
//   e.preventDefault()
//   const list = document.getElementById('list')
//   const li = document.createElement('li')
//   li.innerHTML = `<p>${inputVal}</p>
//     <p>
//     <i class="fa fa-pencil-square-o" aria-hidden="true"></i><i class="fa fa-times" aria-hidden="true"></i
//     </p>
//     <input type="text" class="edit-note">`
//   list.appendChild(li)
//   input.value = ''
// }
// addBtn.addEventListener('click', addNote)