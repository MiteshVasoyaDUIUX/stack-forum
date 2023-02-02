/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.table('users', (table) =>{
      table.integer('role_id').unsigned().references('id').inTable('role');
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex, Promise) {
    return knex.schema.table('users', (table) =>{
        table.dropColumn('role_id');
      })
  };
  