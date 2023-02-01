/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) =>{
    table.increments();
    table.text('display_name').notNullable();
    table.text('email').notNullable();
    table.text('google_id').notNullable();
    table.boolean('banned').notNullable().default(false);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
