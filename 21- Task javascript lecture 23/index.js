import {TodoTasks} from "./todo-item.js"

const task1 = new TodoTasks("HTML Task", false)
console.log(task1)

const task2 = new TodoTasks("Javascript Task", false)
console.log(task2)

task1.updateContent("python Task")
task1.markAsCompleted()

console.log(task1)
