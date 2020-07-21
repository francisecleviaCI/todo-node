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
            console.log((i + 1) + ' ' + todos[i][0] + (' -') + ' ' + todos[i][1] + ' ✅')
        } else {
            console.log((i + 1) + ' ' + todos[i][0] + ' -' + ' ' + todos[i][1] + ' ✖')
        }
        }
        
    }
const result = displayTodos(todos);

    
const readline = require('readline')
const interface = readline.createInterface({input: process.stdin, output: process.stdout})


    const handleMenu = function(userInput){
        if (userInput === '1'){
            console.log(addMenu, add);
        } else if (userInput === '2'){
                console.log(removeMenu, remove);
           }  else {
               console.log('You are quitting!')
        }
      
        
        interface.close();
    }
const addMenu = 'What do you want to put on your todo list?'
    
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
    // console.log(todos);  
    
    
    interface.close();
    const result2 = displayTodos(todos);
}


//**** */ ///
const saveTodos = function(csv){
const newEmptyArray = [];   

for (newTodos of todos){

    newEmptyArray.push(todos);
 
const newJoin = newEmptyArray.join();

const newCsvFile = fs.writeFileSync('./todos.csv', newJoin);
// console.log(newCsvFile)

const newSaveTodos = saveTodos(newCsvFile);
// console.log(newSaveTodos);
}
}

// **Removing Todos**//

const remove = function(userInput){
    
    const newArray = [userInput, 'complete'];
    
    todos.splice(newArray)  
    
  
    const result3 = displayTodos(todos);
    interface.close();
}

const removeMenu = 'What do you want to remove from your todo list?'


interface.question(removeMenu, remove )
