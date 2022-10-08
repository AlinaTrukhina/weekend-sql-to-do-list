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

        // render();
    })
    .catch((err) =>{
        console.log('GET error', err);
    })
} // end getTasks

// function render() {

// } // end render
