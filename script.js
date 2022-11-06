let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById('inputText');
let clearTodo = document.getElementById('clearToDo');

    addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through'; 
        paragraph.style.color = 'black' ;  
        paragraph.style.backgroundColor = 'red' ;
    });

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);

    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })
})   