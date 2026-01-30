const inputTask = document.querySelector(".input-task");
const createBtn = document.querySelector(".create-btn");
const displayTasks = document.querySelector(".display-tasks");
const toDoTasks = document.querySelector(".todo-tasks");
const completedTasks = document.querySelector(".completed-tasks");
const allTasks = document.querySelector(".all-tasks");

let tasks = [];

createBtn.addEventListener("click", () => {
  const taskName = inputTask.value.trim();
  if (taskName === "") return;

  tasks.push({ name: taskName, complete: false });
  inputTask.value = "";
  renderTasks("all"); 
});

function renderTasks(filter = "all") {
  displayTasks.innerHTML = "";
  const date = new Date()
  let filteredTasks = tasks;
  if (filter === "todo") {
    filteredTasks = tasks.filter(t => !t.complete);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter(t => t.complete);
  }

  filteredTasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "d-flex flex-row";

    div.innerHTML = `
      <div class="taskname-date" style="width: 50svw;">
        <p class="m-0">${task.name}</p>
        <small class="m-0 text-secondary">${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}</small>
        <small class="m-0 text-secondary" style="display: block;">${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</small>
      </div>
      <input type="checkbox" class="check-btn bg-white border border-primary mt-2 mb-2" ${task.complete ? "checked" : ""}>
    `;

    const checkbox = div.querySelector("input");
    checkbox.addEventListener("change", () => {
      tasks[index].complete = checkbox.checked;
      renderTasks(filter); 
    });

    displayTasks.appendChild(div);
  });
}


toDoTasks.addEventListener("click", () => renderTasks("todo"));
completedTasks.addEventListener("click", () => renderTasks("completed"));
allTasks.addEventListener("click", () => renderTasks("all"));


