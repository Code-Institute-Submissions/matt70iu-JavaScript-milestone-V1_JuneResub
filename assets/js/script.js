let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let noOfTasksElement = document.getElementById('no-of-to-dos');

//array for todo list

let todoList = ['clean driveway' , 'mow lawn'];

//Functions

function deleteItem(e){
    task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = todoList.indexOf(task);
    if(index !== -1) {
        todoList.splice(index, 1);
    }

    addToList();
}

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
        anchorElement.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e)=> deleteItem(e));

        //add ui to ul

        listElement.appendChild(newItem);
    });

    noOfTasksElement.innerHTML = todoList.length;
    inputElement.value = '';

    
}

addToList();


function noWhiteSpace(s) {
    let stringwidthoutspace = s. trim();
    return stringwidthoutspace.length > 0;
}


function additem(){
    if(inputElement.value && noWhiteSpace(inputElement.value)) {
        todoList.push(inputElement.value);
        addToList();

    }
    


}

//event listeners

formElement.addEventListener('submit' , function(e) {
    e.preventDefault();
    additem()
});

