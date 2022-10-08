//console.log('in js');

$(document).ready(function(){
    console.log('document ready');
    //set up click listeners
    getTasks();
});

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

function render(taskList) {
$('#taskBody').empty();

for (let task of taskList) {
    $('#taskBody').append(`
        <tr>
            <td>${task.task}</td>
            <td>${task.complete}</td>
            <td></td>
        </tr>
    `)
}

} // end render
