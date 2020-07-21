//Local & Session Storage

//set local storage item
// localStorage.setItem('name', 'Chris');
// localStorage.setItem('age', '30');

//set session storage item
// sessionStorage.setItem('name', 'Beth');

//remove from storage
// localStorage.removeItem('name');

//Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


//Clear local storage
// localStorage.clear();

// console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value;

//     let tasks;

//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     alert('Task saved');

//     e.preventDefault();
// })

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//     console.log(task);
// })

function flip(repeat) {
    var countHeads = 0;

    for (let i = 0; i < repeat; i++) {
        var coinFlip = Math.round(Math.random());

        if (coinFlip === 1) {
            console.log("heads");
            countHeads = countHeads + 1;
        }

        if (coinFlip === 0) {
            console.log("tails");
        }
    }

    //return (countHeads/repeat);
    console.log(countHeads/repeat);
}

flip(100);