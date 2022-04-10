let toDoButton = document.getElementById('add-to-list');
let toDoContain = document.getElementById('my-to-dos-container');
let inputField = document.getElementById('list-input-field');

toDoButton.addEventListener('click', function() {
    let paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    toDoContain.appendChild(paragraph);
    inputField.value = "";
   
    
})