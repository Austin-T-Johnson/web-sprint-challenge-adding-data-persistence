// build your `Resource` model here
const db = require('../../data/dbConfig');

function find() {
   return db('resources')
}

function insert(resource) {
    return db('resources').insert(resource)
    .then(([resource_id]) => {
    return db('resources').where({resource_id}).first()
   })
    
}

module.exports = {
    find,
    insert
}