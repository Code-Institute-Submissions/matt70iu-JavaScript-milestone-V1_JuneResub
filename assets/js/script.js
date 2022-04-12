//Variable declarations

let addItemButton = document.getElementById('add-item-button');
let toDoList = document.getElementById ('to-do-list');
let listInput = document.getElementById('list-input');

//Event Listeners

addItemButton.addEventListener('click', function() {
    let paragraph = document.createElement('p')
    paragraph.innerText = listInput.value;
    toDoList.appendChild(paragraph);

})









