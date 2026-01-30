import {inc} from "./counter.js"
class TodoTasks {
  constructor(content, isCompleted){
  this.id = inc()
  this.content = content
  this.isCompleted = isCompleted
  const now = new Date()
  this.createdAt = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
  }

  updateContent(newContent){
    this.content = newContent
  }

  markAsCompleted(){
    this.isCompleted = true
  }
  markAsTodo(){
    this.isCompleted = false
  }
}

export {TodoTasks}