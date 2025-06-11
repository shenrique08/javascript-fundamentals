

// event listeners
const addButton = document.querySelector('#add-btn')


addButton.addEventListener('click', function() {
    alert('Adding items')
})



// mouse events
const onClick = () => console.log('Button clicked!')

addButton.addEventListener('click', onClick)