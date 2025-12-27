const inputTask = document.querySelector(".input-task")
const createBtn = document.querySelector(".create-btn")
const check = document.querySelector(".check")
const displayTasks = document.querySelector(".display-tasks")
const allTasks = document.querySelector(".all-tasks")
const toDoTasks = document.querySelector(".todo-tasks")
const completedTasks = document.querySelector(".completed-tasks")

const tasks = []
const toDo = []
const completed = []



function addToTasks() {
  createBtn.addEventListener("click" , () => {
    let newTask = inputTask.value
    tasks.push(newTask)
    console.log(tasks)
  })
}

addToTasks()

const addToCompletedTasks = () => {
  tasks.forEach((index) => {
    if(completed.includes(index)){
      return
    }else{
    completed.push(index)
    console.log("Completed task is:" + "[" + completed + "]")
  }
  })
}

addToCompletedTasks()

const addToToDoTasks = () => {
  tasks.forEach((task) => {
    if(completed.includes(task)){
      return
    }else{
      toDo.push(task)
    }
  })
}

addToToDoTasks()

const displayToDoTasks = () => {
  toDoTasks.addEventListener("click" , () => {
    displayTasks.innerHTML = ""
    toDo.forEach((task) => {
      displayTasks.innerHTML +=
      `<div class="d-flex flex-row">
        <div class="taskname-date" style="width: 50svw;">
          <p class="m-0">${task}</p>
          <small class="m-0 text-secondary">2025</small>
        </div>
        <input type="checkbox" class="check bg-primary border border-primary mt-2 mb-2">
      </div>`
    })
  })
}

displayToDoTasks()

const displayCompletedTasks = () => {
  completedTasks.addEventListener("click" , () => {
    displayTasks.innerHTML = ""
    completed.forEach((task) => {
      displayTasks.innerHTML += 
      `<div class="d-flex flex-row">
        <div class="taskname-date" style="width: 50svw;">
          <p class="m-0">${task}</p>
          <small class="m-0 text-secondary">2025</small>
        </div>
        <input type="checkbox" class="check bg-primary border border-primary mt-2 mb-2" checked>
      </div>`
    })
    
  })
}

displayCompletedTasks()

const createTasks = () => {
  createBtn.addEventListener("click" , () => {
    displayTasks.innerHTML = ""
    tasks.forEach((task) => {
      displayTasks.innerHTML += 
      `<div class="d-flex flex-row">
        <div class="taskname-date" style="width: 50svw;">
          <p class="m-0">${task}</p>
          <small class="m-0 text-secondary">2025</small>
        </div>
        <input type="checkbox" onClick="addToCompletedTasks() , addToToDoTasks()" class="check bg-white border border-primary mt-2 mb-2">
      </div>`
    })
  })
}

createTasks()

const displayAllTasks = () => {
  allTasks.addEventListener("click" , () => {
    createTasks()
  })
}

