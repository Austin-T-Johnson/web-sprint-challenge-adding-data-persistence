
exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        { task_description: "You gotta build that dinnig table", task_notes: "3/4 inch cuts work best", task_completed: false, project_id: 1 },

        { task_description: "You gotta take those lights down already", task_notes: "Do it quickly", task_completed: false, project_id: 2 },
        
        { task_description: "Once the time machine travels at 88 mph (142 km/h), light coming from the flux capacitor pulses until it becomes a steady stream of light at which point time travel begins!", task_notes: "Time Travel at your own RISK!", task_completed: true, project_id: 3 }
    ])
};
