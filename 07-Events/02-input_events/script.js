
const itemInput = document.getElementById('itemInput');
const priorityInput = document.getElementById('priorityInput');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');

const heading = document.querySelector('h1');

function onInput(e) {
    console.log('Input');
}


itemInput.addEventListener('input', onInput);
