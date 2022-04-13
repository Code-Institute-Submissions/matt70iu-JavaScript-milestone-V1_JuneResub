let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let noOfTasksElement = document.getElementById('no-of-to-dos');

//array for todo list

let todoList = ['clean driveway' , 'mow lawn'];

function addToList(){
    listElement.innerHTML = '';
    todoList.forEach(function(item){
        let newItem = document.createElement('li');
        
        //add new span for text
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        //add delete button

        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fas-fa-trash-alt">';
        newItem.appendChild(anchorElement);

        //add ui to ul

        listElement.appendChild(newItem);
    });

    noOfTasksElement.innerHTML = todoList.length;
    inputElement.value = '';

    
}

addToList();

function additem(){
    if(inputElement.value) {
        todoList.push(inputElement.value);
        addToList();

    }
    


}

//event listener

formElement.addEventListener('submit' , function(e) {
    e.preventDefault();
    additem()
});