// build your `Task` model here
const db = require('../../data/dbConfig');

function find() {
   return db('tasks')
   .then((tasks) => 
   tasks.map((task) => ({
    ...task,
   task_completed: task.task_completed ? true : false,
   })) 
   )
   .catch((err) => console.log(err.message))
}

module.exports = {
    find,
    
}
