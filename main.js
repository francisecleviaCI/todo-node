const fs = require('fs');
const todos = []

const loadTodos = fs.readFileSync('./todos.csv', 'utf-8');
// console.log(loadTodos)

const rowStrings = loadTodos.split('\n');
// console.log(rowStrings)

    for (const newString of rowStrings) {
        const amazingString = newString.split(',');
        // console.log(amazingString)
    
          todos.push(amazingString);
          
        }
        // console.log(todos)

const displayTodos = function(array){
    for (let i = 0; i < todos.length; i++){
        if (todos[i][1] === 'complete'){
            console.log(todos[i][0] + (' -') + ' ' + todos[i][1] + ' ✅')
        } else {
            console.log(todos[i][0] + ' -' + ' ' + todos[i][1] + ' ✖')
        }
        }
        
    }
    let result = displayTodos(todos);
    // console.log(result)
    
const readline = require('readline')
const interface = readline.createInterface({input: process.stdin, output: process.stdout})


    const handleMenu = function(userInput){
        if (userInput === '1'){
            console.log(userInput);
           }  else {
               console.log('You are quitting!')
        }
      
        
        interface.close();
    }

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Mark a todo completed.
4. Mark a todo uncompleted.
5. Quit.
`

interface.question(menu, handleMenu )


const add = function(userInput){
    
    const newArray = [userInput, 'uncomplete'];
    
    todos.push(newArray)  
    
  
    interface.close();
}

const addMenu = 'What do you want to put on your todo list?'


interface.question(addMenu, add )

let result2 = displayTodos(todos);

///
const saveTodos = function(){
const newEmptyArray = [];   

for (let i = 0; i < todos.length; i++)

}