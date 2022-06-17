
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_name: "build new dinning table", project_description: "Build that dinnig table you've been telling your wife you would for the past year", project_completed: false },

    { project_name: "take down christmas lights", project_description: "Stop being lazy and take down the christmas lights from last year", project_completed: false },
    
    { project_name: "invent time travel device", project_description: "It's about time somebody did....", project_completed: true }
  ])
};
