//console.log('in js');

$(document).ready(function(){
    console.log('document ready');
    //set up click listeners
    getTasks();

    setUpClickListeners();
});

function setUpClickListeners() {
    $('#addTaskBtn').on('click', addTask);
    $('body').on('click', '.deleteBtn', deleteTask);
    $('body').on('click', '.markCompleteBtn', completeTask);
}

function getTasks() {
    console.log('in get tasks');
    $.ajax({
        method: 'GET',
        url: '/tasks'
    })
    .then((response) => {
        console.log('getting tasks');
        // response is list of tasks from server
        const taskList = response;
        console.log(taskList);

        render(taskList);
    })
    .catch((err) =>{
        console.log('GET error', err);
    })
} // end getTasks

// function to add a task
function addTask() {
    //console.log($('#taskInput').val());
    const newTask = { 
        task: $('#taskInput').val(),
        complete: 'FALSE'
        }
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: newTask
    })
    .then((response) => {
        console.log('in PUT task', newTask);
        getTasks();
    })
    .catch((err) => {
        console.log('add task error', err);
    })

    $('#taskInput').val() = '';
} // end addTask

// function to delete a task
function deleteTask() {
    console.log('in delete task');

    const taskID = $(this).data('id');
    console.log('task ID', taskID);
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskID}`
    })
    .then((response) => {
        console.log('task deleted');
        getTasks();
    })
    .catch((err) => {
        console.log('DELETE task error', err);
    })
}

function completeTask() {
    console.log('in complete task');

    const taskID = $(this).data('id');
    console.log('task ID', taskID);
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskID}`
    })
    .then((response) => {
        console.log('task deleted');
        getTasks();
    })
    .catch((err) => {
        console.log('DELETE task error', err);
    })    
}

function render(taskList) {
$('#taskBody').empty();

for (let task of taskList) {
    $('#taskBody').append(`
        <tr>
            <td>${task.task}</td>
            <td>${task.complete}</td>
            <td><button class="deleteBtn" data-id="${task.id}">Delete</button></td>
            <td><button class="markCompleteBtn" data-id="${task.id}">Mark Complete</button></td>
        </tr>
    `)
}

} // end render
