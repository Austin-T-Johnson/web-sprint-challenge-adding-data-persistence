
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id');
            tbl.varchar('project_name', 128).unique().notNullable();
            tbl.varchar('project_description', 128);
            tbl.boolean('project_completed')
        })


    .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.varchar('resource_name', 128).unique().notNullable();
        tbl.varchar('resource_description', 128);
    })

    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.varchar('task_description', 128).notNullable();
        tbl.varchar('task_notes');
        tbl.boolean('task_completed')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
    })

    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
    })

}
exports.down = function (knex) {
    return knex.schema
   .dropTableIfExists('project_resources')
   .dropTableIfExists('tasks')
   .dropTableIfExists('resources')
   .dropTableIfExists('projects')

};
