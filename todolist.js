let createNotebook = () => {
  let notebooksList = document.getElementById('notebooksList');
  let notebookItem = document.createElement('div');
  notebookItem.setAttribute('id', 'notebookItem');
  
  let notebookTime = document.createElement('div');
  notebookTime.setAttribute('id', 'notebookTime');
  notebookTime.innerText = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('id', 'deleteNotebook');

  let dropDownArea = document.createElement('div');
  dropDownArea.setAttribute('class', 'dropdown');
  let colorButton = document.createElement('button');
  colorButton.setAttribute('class', 'dropbtn');
  colorButton.textContent = 'Choose color >';
  dropDownArea.appendChild(colorButton);
  let dropDownOptions = document.createElement('div');
  dropDownOptions.setAttribute('class', 'dropdown-content');
  dropDownOptions.setAttribute('id', 'myDropdown');
  dropDownArea.appendChild(dropDownOptions);
  let colorOne = document.createElement('button');
  colorOne.setAttribute('id', 'white');
  dropDownOptions.appendChild(colorOne);
  let colorTwo = document.createElement('button');
  colorTwo.setAttribute('id', 'gray');
  dropDownOptions.appendChild(colorTwo);
  let colorThree = document.createElement('button');
  colorThree.setAttribute('id', 'blue');
  dropDownOptions.appendChild(colorThree);

  let enterNotebookName = prompt('Enter notebook name:', '');
  let notebookName = document.createElement('label');
  notebookName.setAttribute('id', 'notebookName');
  notebookName.innerText = enterNotebookName;
  
  let editNotebookName = document.createElement('input');
  editNotebookName.setAttribute('id', 'editTask');
  editNotebookName.setAttribute('class', 'editTask');

  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.setAttribute('id', 'editNotebookButton');

  let input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('placeholder', 'New task');
  input.setAttribute('id', 'newtasktext');
  
  let addTaskButton = document.createElement('button');
  addTaskButton.textContent = '+';
  addTaskButton.setAttribute('id', 'addTaskButton');

  let taskList = document.createElement('ul')
  taskList.setAttribute('id', 'tasklist');
  
  notebookItem.appendChild(deleteButton);
  notebookItem.appendChild(notebookTime);
  notebookItem.appendChild(dropDownArea);
  notebookItem.appendChild(notebookName);
  notebookItem.appendChild(editNotebookName);
  notebookItem.appendChild(editButton);
  notebookItem.appendChild(input);
  notebookItem.appendChild(addTaskButton);
  notebookItem.appendChild(taskList);
  notebooksList.appendChild(notebookItem);

  addTaskButton.addEventListener('click', appendTask);
  editButton.addEventListener('click', editTask);
  deleteButton.addEventListener('click', deleteTask);
  colorButton.addEventListener('click', dropdown);
  colorOne.addEventListener('click', backgroundWhite);
  colorTwo.addEventListener('click', backgroundGray);
  colorThree.addEventListener('click', backgroundBlue);
}

let appendTask = (e) => {
  let taskList = e.target.nextSibling;
  let taskItem = document.createElement('li');
  taskItem.setAttribute('id', 'taskItem');

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'checkbox');
  taskItem.appendChild(checkbox);

  let newTask = document.createElement('label');
  newTask.textContent = e.target.previousSibling.value;
  newTask.setAttribute('id', 'newTask')
  taskItem.appendChild(newTask);

  let editNewTask = document.createElement('input');
  editNewTask.setAttribute('id', 'editTask');
  editNewTask.setAttribute('class', 'editTask');
  taskItem.appendChild(editNewTask);

  let editButton = document.createElement('button')
  editButton.textContent = 'Edit';
  editButton.setAttribute('id', 'editTaskButton');
  taskItem.appendChild(editButton);
  
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('id', 'deleteTaskButton');
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
  e.target.previousSibling.value = '';

  checkbox.addEventListener('click', taskCompleted)
  editButton.addEventListener('click', editTask);
  deleteButton.addEventListener('click', deleteTask);
}

let editTask = (e) => {
  let editingTask = e.target.previousSibling;
  let taskLabel = editingTask.previousSibling;
  editingTask.classList.toggle('editTask');
  taskLabel.classList.toggle('editTask');

  if(taskLabel.classList.contains('editTask')) {
      editingTask.value=taskLabel.innerText;
      e.target.innerText = 'Save';
  } else {
      taskLabel.innerText=editingTask.value;
      e.target.innerText = 'Edit';
  }
}

let deleteTask = (e) => {
  let taskItem = e.target.parentNode;
  let taskList = taskItem.parentNode;
  taskList.removeChild(taskItem);
}

let taskCompleted = (e) => {
  let taskItem = e.target.parentNode.querySelector('label');
  taskItem.classList.toggle('completed');
}

let backgroundWhite = (e) => {
  e.target.closest('#notebookItem').style.backgroundColor = "white";
  
}

let backgroundGray = (e) => {
e.target.closest('#notebookItem').style.backgroundColor = "lightgray";
}

let backgroundBlue = (e) => {
e.target.closest('#notebookItem').style.backgroundColor = "lightblue";
}

function dropdown(e) {
e.target.nextSibling.classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}