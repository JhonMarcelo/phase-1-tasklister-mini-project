
//Get the form and add an event listener
document.addEventListener("DOMContentLoaded", () => {
  addingEventLiksteners();
});

function addingEventLiksteners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
    
}

function handleFormSubmit(e){
    e.preventDefault()
    const task = e.target["new-task-description"].value
    const priorityLevel = parseInt(e.target.priority.value)
   
   displayTheTask(task, priorityLevel)
}

function displayTheTask(task, priorityLevel){
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement('button')
  
  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)
  
 taskLi.textContent = task + " "
 taskLi.style.color = getPriorityColor(priorityLevel)
 taskUl.appendChild(taskLi)
 taskLi.appendChild(deleteBtn)
 


}

function deleteTask(e){
  console.log(e)
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