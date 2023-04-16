
//Get the form and add an event listener
document.addEventListener("DOMContentLoaded", () => {
  addingEventLiksteners();
});

let taskObjArr = []

function addingEventLiksteners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
    document.getElementById("sort-tasks").addEventListener("change", sortTask)
    
}

function handleFormSubmit(e){
    e.preventDefault()
    const task = e.target["new-task-description"].value
    const priorityLevel = parseInt(e.target.priority.value)

    const taskObj = {task, priorityLevel}
    taskObjArr.push(taskObj)
   
    sortTask()
    displayTask()
}

function displayTask(){

  const taskUl = document.getElementById("tasks")
  taskUl.innerHTML = ""

  taskObjArr.forEach((task) => {

    const taskLi = document.createElement("li")
    const deleteBtn = document.createElement('button')
    
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", (e) => deleteTask(e, task))

    taskLi.textContent = task.task + " "
    taskLi.style.color = getPriorityColor(task.priorityLevel)
    taskUl.appendChild(taskLi)
    taskLi.appendChild(deleteBtn)
  })
  

}

function deleteTask(e, task){
  console.log(e)
  taskObjArr = taskObjArr.filter((element)=> element.task !== task.task)
  e.target.parentNode.remove()

}

function getPriorityColor(priority){
  if (priority === 1) {
    return "red"
  } else if (priority === 2) {
    return "blue"
  } else if(priority === 3) {
    return "green"
  } 
}

function sortTask(){
  const sortTaskSelect = document.getElementById("sort-tasks")
  if (sortTaskSelect.value === 'h-l') {
      taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
      taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
  displayTask()
}