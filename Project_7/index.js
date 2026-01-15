const submitBtn = document.getElementById('addTaskBtn');
const deleteAllBtn = document.getElementById('deleteTaskBtn');
const taskListEl = document.getElementById('taskList');

let taskList = [];

function renderList(){
    taskListEl.innerHTML = '';
    taskList.forEach((task,index)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task.task}-${task.status} <button id = "deleteTaskBtn" onclick = 'deleteTask(${index})'>Delete</button>`;
        taskListEl.appendChild(listItem);
    })
}

submitBtn.addEventListener('click',()=>{
    const taskInput = document.getElementById('taskInput');
    const taskStatus = document.getElementById('taskStatus');


    taskList.unshift({task:taskInput.value,status:taskStatus.value});
    renderList();
    taskInput.value = '';
    taskStatus.value = 'Completed';
})
    
deleteAllBtn.addEventListener('click',()=>{ 
    taskList = [];
    renderList();
})

window.deleteTask = (index)=>{
    taskList.splice(index,1);
    renderList();
}

