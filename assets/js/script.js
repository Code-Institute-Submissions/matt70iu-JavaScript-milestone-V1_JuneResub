const inputElement = document.querySelector('input');
const formElement = document.querySelector('form');
const listElement = document.querySelector('ul');
const noOfTasksElement = document.getElementById('no-of-to-dos');

//array for todo list

let todoList = [];

//Functions

function deleteItem(e){
    task = e.target.parentElement.previousElementSibling.innerHTML;
    const index = todoList.indexOf(task);
    if(index !== -1) {
        todoList.splice(index, 1);
    }

    addToList();
}

function addToList(){
    listElement.innerHTML = '';
    todoList.forEach(function(item){
        const newItem = document.createElement('li');
        
        //add new span for text
        const span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        //add delete button

        const anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e)=> deleteItem(e));

        //add li to ul

        listElement.appendChild(newItem);

        listElement.addEventListener('click' , function(){
            //listElement.style.textDecoration = 'line-through';
        }
        
        )
    });

    noOfTasksElement.innerHTML = todoList.length;
    inputElement.value = '';

    
}

addToList();


function noWhiteSpace(s) {
    const stringwidthoutspace = s. trim();
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

