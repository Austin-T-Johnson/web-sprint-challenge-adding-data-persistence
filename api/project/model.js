// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
   return db('projects')
   .then((projects) => 
   projects.map((proj) => ({
    ...proj,
    project_completed: proj.project_completed ? true : false,
   })) 
   )
}

module.exports = {
    find,
}