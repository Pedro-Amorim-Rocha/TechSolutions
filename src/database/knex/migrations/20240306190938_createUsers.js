exports.up = (knex) => {
    return knex.schema.createTable('clientes', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.boolean("isAdmin").defaultTo("false");

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('clientes')
};
