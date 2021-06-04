//Good to divide things up 

//Selectors:
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var filterOption = document.querySelector('.filter-todo')

//Event Listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)


//Functions 

function addTodo(e){
    e.preventDefault();
    //First make a todo div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoInput.value = "";

    //ab is li ko us div mein daalo 

    todoDiv.appendChild(newTodo);

    //Buttons: Completed and Delete 
    const CompletedButton = document.createElement('button');
    CompletedButton.innerHTML = '<i class = "fas fa-check"> </i>';
    CompletedButton.classList.add('complete-btn');
    todoDiv.appendChild(CompletedButton);


    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Appending the div to main ul

    todoList.appendChild(todoDiv);



}

function deleteCheck(e){
    var item = e.target;

    if (item.classList[0] === "trash-btn"){
        var temp = item.parentElement;
        temp.classList.add('fall');
        temp.addEventListener('transitionend', function(){
            temp.remove();
        })
        
    }
    if (item.classList[0] === "complete-btn"){
        var temp = item.parentElement;
        temp.classList.toggle('completed');
    }
} 


function filterTodo(e){

    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = 'flex';
                break
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break
            case "uncompleted":
                if (todo.classList.contains('completed')){
                    todo.style.display = 'none';
                }
                else{
                    todo.style.display = 'flex';
                }
        }
    });
}