import { useRef, useState } from 'react'
import './App.css'
import check from './assets/check-all-big-svgrepo-com.svg'
import wrong from './assets/wrong-delete-remove-trash-minus-cancel-close-2-svgrepo-com.svg'

function App() {
  type Task = {
    taskName: string,
    taskStatus: boolean,
  }
  const addInput: any = useRef<HTMLInputElement>(null)
  const [ tasks, setTasks ] = useState<Task[]>([]);


  const addTask :any = () => {
    let newTask = {
      taskName: addInput.current.value,
      taskStatus: false
    }
    let copy: Task[] = [...tasks]
    copy.push(newTask)
    setTasks(copy)
    console.log(copy)
  }

  const delteTask = (index: number) => {
    let copy = [...tasks]
    copy.splice(index, 1)
    setTasks(copy)
  }

  const changeStatus = (index: number) => {
    let copy = [...tasks]
    copy[index].taskStatus = !copy[index].taskStatus
    setTasks(copy)
  }

  return (
    <>
      <div className="todo-container">
        <div className="input-container">
          <input ref={addInput} type="text" placeholder='Add your task' />
          <button type='submit' onClick={() => {
            addTask()
          }}>Add</button>
        </div>
        <div className="lists-container">
          {tasks.map((task, index : number) => {
            return (
            <div className='task-container'>
              <div className="task-name-container">
                <span>{index}- </span>
                <h1 className='task-name'>{task.taskName}</h1>
              </div>
              <div className="task-btns">
                <button className='task-btn' onClick={() => {
                  changeStatus(index)
                }}>Done</button>
                <button className='task-btn' onClick={() => {
                  delteTask(index)
                }}>Delete</button>
              </div>
              <div className="check">
                {task.taskStatus === false ? <img src={wrong} className='check-img' />: <img src={check} className='check-img' /> }
              </div>
            </div>
            )
          }
            
          )}
        </div>
      </div>
    </>
  )
}

export default App
