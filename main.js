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
    

  