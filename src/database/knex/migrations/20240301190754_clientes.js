exports.up = (knex) => {
    return knex.schema.createTable('clientes', (table) => {

        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('message').notNullable();

    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('clientes')
};

