const input = document.querySelector('#input');
const todoBox = document.querySelector('.todoBox');
const submit = document.querySelector('#btn');


const handleTodo = () => {
    todoBox.innerText =  input.value;
    
}


submit.addEventListener('click' , handleTodo);
