//Variable declarations

let inputArea = document.getElementById('input-area');
let formElement = document.getElementById('add-item-list');
let listElement = document.querySelector('ul');
let noOfTasksElement = document.getElementById('no-of-tasks');

//List array

let todoList = [ 'Buy milk' , 'Collect kids from school'];

//Functions

function addToList(){
    todoList.forEach(function(item){
        let newItem = document.createElement('li');

        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        let anchorElement = document.createElement('a');
        anchorElement.classList.add('remove');
        anchorElement.innerHTML = 'delete';
        newItem.appendChild(anchorElement);

        listElement.appendChild(newItem)
    }
      );

      noOfTasksElement.innerHTML = todoList.length;
}




addToList();
